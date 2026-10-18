# Backend IncidentLens

Backend chứa nghiệp vụ, persistence và pipeline AI. Deployment hiện tại đặt **worker và Qwen3.5 trên GPU Vast.ai**, API ở Render và database dùng chung trên Neon. Xem [README hệ thống](../README.md).

| Thành phần | Trách nhiệm |
|---|---|
| `gpu_worker.py` | Consumer V1 trên Vast, kiểm tra Ollama và file nguồn trước khi claim job |
| `worker.py` | Lease/heartbeat, xử lý incident, lưu kết quả |
| `worker_v2.py` | Worker recording/candidate V2 riêng, không phải entry point GPU đang hướng dẫn |
| `services/` | Video, telemetry, Qwen provider, jobs, reports, evidence và auth |
| `models/` | SQLAlchemy models và hợp đồng dữ liệu |
| `alembic/` | Database migrations |
| `agents/` | LangGraph mẫu, chưa điều phối pipeline video |

## Cấu hình worker

Dùng [worker.env.example](../deploy/vast/worker.env.example), lưu thành `/workspace/incidentlens/worker.env`. Media service và worker nạp cùng file, cùng database và cùng `INCIDENT_STORAGE_DIR`. `GPU_MEDIA_BASE_URL` phải trống trên Vast.

Model đang dùng: `qwen3.5:9b`, `QWEN_RUNTIME=ollama`, `QWEN_REASONING_EFFORT=none`. Ollama ở loopback GPU `11434`. [Runtime validation](services/qwen_local.py) kiểm tra endpoint và capability vision, không tự chứng minh model đang sử dụng GPU.

[Supervisor installer](../deploy/vast/install_worker.sh) bật media service, giữ worker `autostart=false`. Start worker sau khi env, media và model sẵn sàng. Không chạy thêm worker ở Render hoặc máy cá nhân để tránh xử lý queue bằng storage sai máy.

## Kiểm tra

Từ root, trong môi trường test độc lập:

```bash
python -m ruff check backend api
python -m pytest tests/ -q
```

Các test có provider giả chỉ kiểm hợp đồng/xử lý lỗi, không chứng minh chất lượng Qwen hoặc deployment. Xem [kiến trúc và giới hạn](../docs/architecture_diagram.md).
