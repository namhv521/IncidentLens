# Worklog — Nhóm P-076 / IncidentLens

Cập nhật đến ngày **18/10/2026**. Worklog tổng hợp lịch sử commit trên các nhánh đang có trong repository và phần việc được nhóm xác nhận.

## 1. Thành viên và tài khoản

| Thành viên | Mã học viên | GitHub | Tên tác giả xuất hiện trong Git |
|---|---|---|---|
| Hoàng Văn Nam | `2A202602853` | `namhv521` | `susois`, `Nam Hoang` |
| Nguyễn Văn Hồng | `2A202602800` | `hongneuk65` | `hongneuk65`, `Nguyễn Văn Hồng` |
| Nguyễn Hải Hoàng | `2A202602489` | `hoang9605` | `hoang9605`, `Nguyễn Hoàng` |
| Lê Tuấn Đạt | `2A202602623` | `tuandatt08` | `LeTuanDat`, `Lê Tuấn Đạt` |

## 2. Cách ghi nhận

- Công việc của Nam, Hồng và Hoàng được tổng hợp theo commit của từng người; các commit cùng mục tiêu được gộp thành một đầu việc.
- Phần việc của Đạt gồm sử dụng CARLA sinh video mô phỏng, hỗ trợ chạy Qwen trên GPU Vast.ai và các thay đổi có commit đối chiếu.
- **Cả bốn thành viên cùng tham gia test Qwen**, theo xác nhận của nhóm. Commit thử nghiệm là mốc tham chiếu cho hoạt động chung, không có nghĩa chỉ tác giả commit tham gia.
- Commit trên nhánh khác được ghi rõ khi chưa thuộc lịch sử `HEAD` tại thời điểm tổng hợp. Commit merge không được tính thành đầu việc triển khai riêng.
- Không suy diễn số giờ, ngày làm việc ngoài Git hoặc tỷ lệ đóng góp từ số commit. Nội dung commit thể hiện công việc đã ghi nhận, không tự chứng minh chất lượng mô hình hay triển khai thực tế thành công.

## 3. Nhật ký công việc theo thời gian

| Ngày / giai đoạn | Thành viên | Công việc ghi nhận | Commit / căn cứ |
|---|---|---|---|
| 11/09/2026 | Nguyễn Hải Hoàng | Thử nghiệm ghi nhận AI log ban đầu. | `0a11517` (`test ailog`) |
| 22/09/2026 | Nguyễn Hải Hoàng | Cập nhật journal, tài liệu kiến trúc và worklog. | `7ca7b5c`, `ae648f6` |
| 22/09/2026 | Nguyễn Văn Hồng | Điều chỉnh hook Codex cho Windows; cập nhật worklog và ghi nhận tạo nhánh `nvhdev`; xây dựng frontend dùng dữ liệu mock. | `f71e5e9`, `5c6bbf5`, `78160cc`, `bdb44e8` |
| 23/09/2026 | Nguyễn Hải Hoàng | Định nghĩa contract RAV18, migration sáu bảng; đưa incident và telemetry chuẩn hóa vào database; triển khai phân tích hai lượt và lưu evidence. | `9c94c6f`, `bc03b11`, `a3ecff6` |
| 23/09/2026 | Nguyễn Hải Hoàng | Củng cố evidence và worker lease; hoàn thiện review, truy cập media, schema API; cấu hình PostgreSQL/FFmpeg trong Docker; bổ sung demo worker, kiểm thử và hướng dẫn MVP. | `2096e78`, `0a8f9b7`, `5514d5e`, `a8dad86`, `e5e15bb`, `f147fa0`, `825fd13`, `2db9103` |
| 23–24/09/2026 | Nguyễn Văn Hồng | Xây dựng khung API phân tích incident, kiểm thử workflow API, thêm audit history trên frontend và cập nhật README. | `de61714`, `aa17e5a`, `db5fbac`, `e6dd4fc` |
| 30/09/2026 | Nguyễn Hải Hoàng | Cập nhật tài liệu kiến trúc. | `c8e332d`, `ba552f1`; nội dung thay đổi nằm trong `ARCHITECTURE.md` |
| 30/09–02/10/2026 | Hoàng Văn Nam | Điều chỉnh Git/Docker ignore, cập nhật README và cấu trúc tài liệu; sửa runner, CI, cách chạy pytest và import Alembic. | `9dacd89`, `4702016`, `ff6335c`, `ab5bcc6`, `bdbe55a`, `ec84e86`, `d28c53a`, `a63d491`, `0297c19`, `daed6c0`, `1387662` |
| 02/10/2026 | Nguyễn Văn Hồng | Chuyển đổi API và backend IncidentLens. | `690d3c7` |
| 03/10/2026 | Hoàng Văn Nam | Bổ sung schema phân tích incident chặt chẽ, tổ chức tài liệu theo vai trò; hoàn thiện luồng phân tích recording và review V2. | `d7a2c7e`, `f8eff41` |
| 03/10/2026 | Nguyễn Hải Hoàng | Điều chỉnh prompt VLM để nhận diện cả sự cố không va chạm. | `4390b23` — trên nhánh khác, chưa thuộc `HEAD` |
| 04/10/2026 | Hoàng Văn Nam | Bổ sung chạy Qwen local bằng CPU/CUDA, báo cáo được kiểm tra; cấu hình V2 local với web session theo phạm vi; thêm Cloudflare Access và tạo recording có kiểm soát. | `c91edb2`, `1492f2b`, `99737ad` — trên nhánh khác, chưa thuộc `HEAD` |
| 05/10/2026 | Nguyễn Hải Hoàng | Bổ sung hướng dẫn thiết lập và báo cáo đánh giá VLM. | `75edfab` — trên nhánh khác, chưa thuộc `HEAD` |
| 07–10/10/2026 | Hoàng Văn Nam | Thử nghiệm Qwen/VLM và giao diện. | `7af9ada` — trên nhánh khác, chưa thuộc `HEAD`; `4f62516` — thuộc `HEAD` |
| 10/10/2026 | Nguyễn Hải Hoàng | Bổ sung biểu đồ telemetry và đồng bộ video trong giao diện review. | `8bd9337` — trên nhánh khác, chưa thuộc `HEAD` |
| 11/10/2026 | Nguyễn Hải Hoàng | Bổ sung session authentication và quản lý tài khoản. | `ff6bfe9` — trên nhánh khác, chưa thuộc `HEAD` |
| 12/10/2026 | Nguyễn Văn Hồng | Tích hợp frontend/auth với Qwen 7B; xử lý dialog khi hết phiên, giữ phản hồi review; tách diagnostics và giới hạn hình ảnh trong báo cáo. | `0407fb9`, `f9ee681`, `8e1dc3b` — trên nhánh khác, chưa thuộc `HEAD` |
| 12/10/2026 | Hoàng Văn Nam | Nâng cấp Qwen 7B; tối ưu tìm trigger theo O(n), sử dụng đạo hàm theo thời gian để xử lý log. | `7771cc8` |
| 13/10/2026 | Hoàng Văn Nam | Cập nhật cấu hình Docker frontend/backend trên VPS và Ollama/Qwen trên GPU. | `e9c9cf6` |
| 13/10/2026 | Nguyễn Văn Hồng | Xây dựng Galaxy landing với chuyển động quỹ đạo và hiệu ứng theo con trỏ. | `3227378` |
| 14/10/2026 | Nguyễn Văn Hồng | Tích hợp authentication và cải thiện không gian review IncidentLens. | `7575d80` |
| 15/10/2026 | Hoàng Văn Nam | Chuyển worker V1 và xử lý media sang GPU Vast qua SSH; điều chỉnh health probe theo cổng Render và xử lý cấu hình media khi GPU khởi động. | `3d0026f`, `5a76cd5`, `04ae7bd` |
| 15/10/2026 | Hoàng Văn Nam | Cải thiện phân tích chuỗi frame, xác nhận phanh gấp kéo dài, đối chiếu telemetry, tổng hợp kết luận và giữ trigger memory trong chuỗi Qwen. | `0c1b6e6`, `4afd7a0`, `2f95e3f`, `50cc0ac`, `f6df3ca` |
| 15/10/2026 | Hoàng Văn Nam | Giữ khả năng đọc metadata review đã xác thực khi GPU offline. | `cde9c22` |
| 15–16/10/2026 | Hoàng Văn Nam | Chạy các vòng thử prompt/frame Qwen, gồm chuỗi 13 frame và Stage 2; ghi nhận thay đổi thử nghiệm. | `afd6b86`, `fe29994`, `d5e3bd1`, `dda5920`, `4c1ca9a`, `4d23068` |
| 18/10/2026 | Nguyễn Văn Hồng | Cải thiện landing, theme dùng chung, không gian báo cáo; cập nhật xuất báo cáo, video fullscreen và điều hướng upload. | `2ca6be1`, `0f14293` |
| 18/10/2026 | Hoàng Văn Nam | Sửa tích hợp telemetry frontend, bổ sung thông tin phân tích có cấu trúc, loại log chẩn đoán khỏi đầu ra; sửa lỗi điều hướng và xuất báo cáo sau merge. | `8bc92c1`, `b8b5f8a`, `23fa819`, `b5ea7ae` |
| 18/10/2026 | Hoàng Văn Nam | Hoàn thiện CI, fixture phục hồi upload, schema test và các bước kiểm tra frontend; điều chỉnh cache self-hosted runner và cập nhật README. | `3acf53b`, `934453c`, `4f2a2e7`, `fc35be0`, `f9df53e`, `5841d2c` |

## 4. CARLA, GPU Vast.ai và thử nghiệm Qwen

| Thành viên | Công việc | Mốc / căn cứ |
|---|---|---|
| Lê Tuấn Đạt | Sử dụng CARLA sinh video mô phỏng phục vụ thử nghiệm phân tích incident. Bổ sung code AI/Data sinh và chấm điểm dữ liệu mô phỏng; điều chỉnh mốc thời gian sự cố, tách phần CARLA thành `src/carla_gen`, bổ sung requirements và README hướng dẫn sinh clip. | Nhóm xác nhận; các commit đối chiếu ngày 10–13/10: `f779a88`, `71d082c`, `2ba1859`, `9216c24`, `5a92c1f` — trên nhánh khác, chưa thuộc `HEAD` |
| Lê Tuấn Đạt | Hỗ trợ thiết lập và vận hành môi trường chạy Qwen trên GPU Vast.ai, phối hợp chạy thử với nhóm. | Nhóm xác nhận; chưa gán ngày hoặc commit riêng cho phần hỗ trợ vận hành |
| Lê Tuấn Đạt | Cập nhật pipeline Qwen và lưu bộ thử nghiệm Qwen 9B, kết quả trên các video/frame thử nghiệm. | `e08c73a` ngày 18/10 (`finish qwen 9b`) |
| Hoàng Văn Nam, Nguyễn Văn Hồng, Nguyễn Hải Hoàng, Lê Tuấn Đạt | Cùng tham gia test Qwen: chạy thử trên video/frame, xem và đối chiếu đầu ra, trao đổi nhận xét để điều chỉnh prompt và pipeline. | Nhóm xác nhận; mốc thử nghiệm tham chiếu: `4f62516`, `7771cc8`, `afd6b86`, `fe29994`, `d5e3bd1`, `4d23068`, `e08c73a`. Không quy toàn bộ hoạt động test cho riêng tác giả commit |

## 5. Tổng hợp đóng góp

- **Hoàng Văn Nam (`namhv521`):** tích hợp hệ thống, pipeline phân tích telemetry/video và Qwen, worker/GPU, cấu hình triển khai, CI và sửa lỗi tích hợp.
- **Nguyễn Văn Hồng (`hongneuk65`):** frontend, landing, authentication phía giao diện, workflow review, báo cáo, trải nghiệm upload/video; tham gia API/backend giai đoạn đầu.
- **Nguyễn Hải Hoàng (`hoang9605`):** kiến trúc và tài liệu, contract/database, ingest telemetry, worker phân tích hai lượt, evidence, review API, kiểm thử backend; bổ sung auth và đồng bộ telemetry/video trên các nhánh chuyên biệt.
- **Lê Tuấn Đạt (`tuandatt08`):** sử dụng CARLA sinh video mô phỏng, hỗ trợ chạy Qwen trên GPU Vast.ai, cập nhật pipeline và bộ thử nghiệm Qwen.
- **Cả nhóm:** cùng tham gia test Qwen và đối chiếu kết quả phục vụ hoàn thiện hệ thống.

Thời lượng thực hiện chưa có dữ liệu xác nhận nên không đưa vào worklog.
