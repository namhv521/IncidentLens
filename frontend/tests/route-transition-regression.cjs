const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function setup() {
  const listeners = [], timers = new Map(), cleanups = [];
  class Element { closest() { return this; } }
  class HTMLAnchorElement extends Element {
    href = 'http://localhost/incidents'; target = ''; download = '';
    hasAttribute() { return false; }
  }
  const document = {
    addEventListener(type, fn, capture = false) { listeners.push({ type, fn, capture }); },
    removeEventListener(type, fn) { const i = listeners.findIndex(item => item.type === type && item.fn === fn); if (i >= 0) listeners.splice(i, 1); },
  };
  const location = { href: 'http://localhost/reports/R1', origin: 'http://localhost', pathname: '/reports/R1', search: '' };
  const window = { location, matchMedia: () => ({ matches: true }), confirm: () => false, addEventListener() {}, removeEventListener() {} };
  const react = { useRef: value => ({ current: value }), useState: value => [value, () => {}], useEffect: fn => { const cleanup = fn(); if (cleanup) cleanups.push(cleanup); } };
  function load(file) {
    const exports = {};
    vm.runInNewContext(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText, {
      exports, require: name => name === 'react' ? react : name === 'next/navigation' ? { usePathname: () => location.pathname } : { jsx: () => null, jsxs: () => null },
      document, window, location, Element, HTMLAnchorElement, URL,
      setTimeout(fn) { const id = Symbol(); timers.set(id, fn); return id; }, clearTimeout: id => timers.delete(id),
    });
    return exports;
  }
  load('components/layout/route-transition.tsx').RouteTransition({ children: null });
  function click(target = new HTMLAnchorElement(), options = {}) {
    const event = { target, button: 0, defaultPrevented: false, preventDefault() { this.defaultPrevented = true; }, stopPropagation() { this.stopped = true; }, stopImmediatePropagation() { this.immediate = true; }, ...options };
    for (const capture of [true, false]) for (const item of [...listeners]) {
      if (event.immediate || !capture && event.stopped) break;
      if (item.type === 'click' && item.capture === capture) item.fn(event);
    }
  }
  return { load, timers, listeners, cleanups, click };
}

test('cancelled unsaved navigation never starts a loading indicator', () => {
  const h = setup();
  h.load('lib/use-unsaved-changes.ts').useUnsavedChanges(true);
  h.click();
  assert.equal(h.timers.size, 0);
});

test('normal navigation schedules feedback and unmount clears timers and listeners', () => {
  const h = setup(); h.click(); assert.equal(h.timers.size, 2);
  h.cleanups.forEach(fn => fn());
  assert.equal(h.timers.size, 0); assert.equal(h.listeners.length, 0);
});

test('non-element clicks and new-tab links do not start navigation feedback', () => {
  const h = setup();
  assert.doesNotThrow(() => h.click({}));
  h.click(undefined, { ctrlKey: true }); assert.equal(h.timers.size, 0);
});
