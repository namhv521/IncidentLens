# API IncidentLens

FastAPI chạy trên **Render**. Entry point Docker hiện là [deploy.render_start](../deploy/render_start.py): khởi động API và duy trì SSH tunnel tới media service trên Vast.ai. Mẫu cấu hình: [.env.example](../.env.example).

## Trách nhiệm

- Auth, session, phân quyền, incidents, jobs, reports, evidence metadata và audit.
- Dùng PostgreSQL Neon chung với media service và worker trên Vast.
- [GpuMediaProxy](gpu_media_proxy.py) chuyển upload/media V1 thuộc route scope qua `GPU_MEDIA_BASE_URL=http://127.0.0.1:18000`.
- [api.gpu_media](gpu_media.py) chạy trên Vast, bind loopback, kiểm tra quyền và thao tác file tại GPU storage.

API Render không chạy worker hoặc Qwen. Dùng Uvicorn đơn lẻ thay entry point Docker sẽ không khởi tạo SSH tunnel.

## Router

[App](main.py) mount router V1 và V2. V1 là luồng đang được mô tả trong [README](../README.md). Router chat mẫu trong [routes.py](routes.py) chưa được mount. V2 có implementation riêng nhưng GPU media proxy/worker hiện tại không tự hỗ trợ toàn bộ luồng V2; frontend deployment giữ workspace V2 tắt.

## Điều kiện triển khai

Production yêu cầu cookie Secure, CORS origin HTTPS chính xác, migrations đầy đủ, SSH key/known_hosts hợp lệ và Neon dùng chung. API health không xác nhận GPU hoặc worker đã sẵn sàng. Xem [kiến trúc](../docs/architecture_diagram.md) và [backend](../backend/README.md).
