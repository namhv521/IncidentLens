"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

// Animate the container without remounting editors or resetting unsaved drafts.
export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const container = useRef<HTMLDivElement>(null);
  const [navigating, setNavigating] = useState(false);
  const pending = useRef<ReturnType<typeof setTimeout>>();
  const expiry = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    const start = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.download || anchor.target && anchor.target !== "_self") return;
      const next = new URL(anchor.href, location.href);
      if (next.origin !== location.origin || next.pathname === location.pathname) return;
      if (pending.current) clearTimeout(pending.current);
      if (expiry.current) clearTimeout(expiry.current);
      pending.current = setTimeout(() => setNavigating(true), 160);
      expiry.current = setTimeout(() => setNavigating(false), 12000);
    };
    document.addEventListener("click", start, true);
    return () => { document.removeEventListener("click", start, true); if (pending.current) clearTimeout(pending.current); if (expiry.current) clearTimeout(expiry.current); };
  }, []);
  useEffect(() => {
    if (pending.current) clearTimeout(pending.current);
    if (expiry.current) clearTimeout(expiry.current);
    setNavigating(false);
  }, [pathname]);
  useEffect(() => {
    const element = container.current;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches || !element?.animate) return;

    // A global transform would change the containing block of fixed dialogs
    // and sticky navigation. Fade only, keeping content readable throughout.
    const animation = element.animate(
      [{ opacity: 0.72 }, { opacity: 1 }],
      { duration: 220, easing: "cubic-bezier(.22,1,.36,1)" },
    );
    const cancelOnReducedMotion = () => {
      if (motionPreference.matches) animation.cancel();
    };
    motionPreference.addEventListener("change", cancelOnReducedMotion);
    return () => {
      animation.cancel();
      motionPreference.removeEventListener("change", cancelOnReducedMotion);
    };
  }, [pathname]);
  return <><div className="route-navigation-feedback" data-active={navigating} role="status" aria-live="polite">{navigating && <><span className="route-navigation-line" aria-hidden="true" /><span className="route-navigation-label">Đang mở trang…</span></>}</div><div ref={container} className="workspace-route">{children}</div></>;
}
