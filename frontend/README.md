# IncidentLens frontend

Frontend Next.js của RAV-18 IncidentLens, deploy trên **Vercel**. Backend API ở Render; worker, media và Qwen3.5 chạy trên GPU Vast.ai. Xem [README hệ thống](../README.md).

## Cấu hình Vercel

Project root: `frontend`. Build: `npm run build`. Đặt Environment Variables theo [.env.example](.env.example), rồi redeploy:

- `NEXT_PUBLIC_USE_MOCK_API=false`, `NEXT_PUBLIC_ENABLE_AUTH=true`.
- `NEXT_PUBLIC_API_BASE_URL=/api/v1`, `NEXT_PUBLIC_API_V2_BASE_URL=/api/v2`.
- `BACKEND_INTERNAL_URL` là origin HTTPS của Render, không có `/api/v1` và không trỏ localhost.
- `NEXT_PUBLIC_ENABLE_V2_WORKSPACE=false`: pipeline media/worker triển khai hiện tại dùng V1.

Khi bật auth, [frontend config](lib/config.ts) dùng API cùng origin `/api/v1`. [Next.js rewrite](next.config.mjs) chuyển sang Render. Đổi `NEXT_PUBLIC_API_BASE_URL` không thay thế `BACKEND_INTERNAL_URL` trong chế độ này. Không đặt database credential hoặc SSH key vào Vercel frontend env.

## Luồng sử dụng

- `/incidents`: danh sách sự cố.
- `/incidents/new`: tải MP4 và CSV tùy chọn.
- `/incidents/[id]/processing`: tiến độ phân tích.
- `/incidents/[id]`: bằng chứng, báo cáo, chỉnh sửa và kiểm duyệt.

Mock là công cụ phát triển có trong source; không chứng minh API hoặc inference hoạt động. Mẫu env hiện tại dùng API thật.

## Kiểm tra source frontend

Tại thư mục này, với Node.js 20 và dependency đã cài:

```bash
npm ci
npm run typecheck
npm run lint
npm run build
```

Các lệnh kiểm tra source không khởi tạo Render, Neon hoặc GPU. Kiểm tra end-to-end cần đầy đủ các dịch vụ trong [kiến trúc](../docs/architecture_diagram.md).
