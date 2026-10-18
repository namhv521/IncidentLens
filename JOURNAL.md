# Weekly Journal — Nhóm P-076 / IncidentLens

Cập nhật đến **18/10/2026**. Đề tài: **RAV-18 — phân tích và hỗ trợ review sự cố từ video, telemetry và VLM**.

## Thành viên

| Họ và tên | Mã học viên | GitHub |
|---|---|---|
| Hoàng Văn Nam | `2A202602853` | `namhv521` |
| Nguyễn Văn Hồng | `2A202602800` | `hongneuk65` |
| Nguyễn Hải Hoàng | `2A202602489` | `hoang9605` |
| Lê Tuấn Đạt | `2A202602623` | `tuandatt08` |

## Cơ sở ghi nhận

Nhật ký tổng hợp commit trên các nhánh hiện có trong repository, kết hợp thông tin nhóm đã xác nhận trong [WORKLOG.md](WORKLOG.md). Tên tác giả `susois` và `Nam Hoang` được quy về Hoàng Văn Nam. Các mục khó khăn, bài học và hướng xử lý được rút ra từ nội dung thay đổi; không phải biên bản họp hoặc số liệu đánh giá mới.

Các commit có ký hiệu **[nhánh khác]** chưa thuộc lịch sử `HEAD` tại thời điểm tổng hợp. Commit có nội dung kiểm thử, báo cáo hoặc cấu hình triển khai không tự chứng minh toàn bộ hệ thống đang hoạt động ổn định hoặc mô hình đạt độ chính xác yêu cầu. Các kế hoạch là hướng tiếp theo, không phải việc đã hoàn thành.

## Tuần 1: 14/09–20/09/2026 — Hình thành nhóm và chọn đề tài

### Mục tiêu và kết quả

- Lập nhóm bốn thành viên, chọn đề tài RAV-18 và phân chia vai trò ban đầu.
- Xác định hướng xây dựng hệ thống hỗ trợ phân tích sự cố từ dữ liệu phương tiện và video.

Các nội dung trên được giữ từ journal trước. Lịch sử Git hiện có không cung cấp commit trong khoảng 14–20/09 để xác nhận chi tiết từng buổi làm việc. Mốc khởi tạo repository là `48bc641` ngày 10/09; Hoàng có commit thử AI log `0a11517` ngày 11/09, trước tuần này.

### Khó khăn và bài học

Giai đoạn đầu cần thu hẹp đề tài thành một luồng MVP có đầu vào, kết quả và người review rõ ràng. Journal ban đầu chưa ghi khó khăn cụ thể, nên không bổ sung sự kiện chưa có căn cứ.

### Hướng chuyển sang tuần 2

Chốt contract dữ liệu, xây dựng backend phân tích và giao diện review đầu tiên.

## Tuần 2: 21/09–27/09/2026 — Xây dựng nền tảng MVP

### Đã hoàn thành theo commit

- **Nguyễn Hải Hoàng:** cập nhật journal và kiến trúc (`7ca7b5c`); định nghĩa contract RAV18 và migration sáu bảng (`9c94c6f`); ingest incident/telemetry (`bc03b11`); triển khai phân tích hai lượt và lưu evidence (`a3ecff6`).
- **Nguyễn Hải Hoàng:** củng cố worker lease và evidence (`2096e78`), bổ sung kiểm thử audit (`0a8f9b7`), schema API (`5514d5e`), review/media (`a8dad86`), Docker PostgreSQL/FFmpeg (`e5e15bb`) và hướng dẫn kiểm thử MVP (`825fd13`, `2db9103`). Demo worker trong `f147fa0` sử dụng báo cáo giả lập để phục vụ demo có kiểm soát.
- **Nguyễn Văn Hồng:** điều chỉnh hook Windows (`f71e5e9`), tạo frontend dữ liệu mock (`bdb44e8`), xây dựng khung API và kiểm thử workflow (`de61714`, `aa17e5a`), bổ sung audit history (`db5fbac`) và README (`e6dd4fc`).
- Repository có commit tích hợp frontend review với backend v1.1 (`dba7997`), tác giả Git là `Codex`; không gán riêng commit này cho một thành viên khi chưa có căn cứ.

### Khó khăn và hướng xử lý

| Vấn đề thể hiện trong thay đổi | Hướng xử lý đã ghi nhận |
|---|---|
| Frontend, backend và dữ liệu cần cùng contract | Bổ sung schema API, chuẩn hóa telemetry và kiểm thử workflow. |
| Job phân tích cần giữ evidence và quyền xử lý nhất quán | Củng cố worker lease, đường dẫn evidence và audit. |
| Môi trường phát triển cần database và xử lý video | Bổ sung cấu hình PostgreSQL/FFmpeg trong Docker và hướng dẫn MVP. |

### Bài học

Contract dữ liệu và evidence cần được thiết kế cùng workflow review. Dữ liệu mock và demo worker giúp kiểm tra luồng, nhưng cần phân biệt với kết quả suy luận trên dữ liệu thực.

### Hướng chuyển sang tuần 3

Hoàn thiện recording/review V2, schema phân tích và phương án kết nối VLM.

## Tuần 3: 28/09–04/10/2026 — Hoàn thiện V2 và tích hợp VLM

### Đã hoàn thành theo commit

- **Hoàng Văn Nam:** cập nhật ignore, README, cấu trúc tài liệu và CI; sửa cách chạy pytest và import Alembic (`4702016`, `ab5bcc6`, `d28c53a`, `a63d491`, `0297c19`, `daed6c0`, `1387662`). Bổ sung schema phân tích chặt chẽ và hoàn thiện recording/review V2 (`d7a2c7e`, `f8eff41`).
- **Nguyễn Văn Hồng:** chuyển đổi API và backend IncidentLens (`690d3c7`).
- **Nguyễn Hải Hoàng:** cập nhật kiến trúc ngày 30/09 (`c8e332d`, `ba552f1`); điều chỉnh prompt cho sự cố không va chạm (`4390b23`, **[nhánh khác]**).
- **Hoàng Văn Nam:** bổ sung Qwen local CPU/CUDA, V2 local có session theo phạm vi và Cloudflare Access (`c91edb2`, `1492f2b`, `99737ad`, **[nhánh khác]**).
- **Lê Tuấn Đạt:** bổ sung provider Claude/Gemini (`13d93b2`, `2284228`), lấy mẫu frame và giữ raw text khi parse thất bại (`437e572`, `079213d`); điều chỉnh mốc sự cố theo CSV và timestamp evidence tuyệt đối (`7ba78b7`, `fd5f0ec`, `d914cc1`). Các commit này thuộc **[nhánh khác]**.

### Khó khăn và hướng xử lý

| Vấn đề thể hiện trong thay đổi | Hướng xử lý đã ghi nhận |
|---|---|
| Phản hồi VLM không luôn parse được theo cấu trúc | Giữ raw text để truy vết và bổ sung schema phân tích. |
| Mốc thời gian video, CSV và evidence có thể không thống nhất | Neo thời điểm quan trọng theo CSV, xử lý timestamp evidence tuyệt đối. |
| Sự cố không chỉ gồm va chạm | Điều chỉnh prompt để bao quát sự cố không va chạm. |
| Lệnh test/import không nhất quán trong CI | Sửa cách gọi pytest và sắp xếp import Alembic. |

### Bài học

Cần giữ cả đầu ra gốc và kết quả đã chuẩn hóa của VLM. Tích hợp provider thành công chưa đủ để kết luận mô hình hiểu đúng sự cố; phải kiểm tra evidence và trục thời gian.

### Hướng chuyển sang tuần 4

Thử nghiệm Qwen, chuẩn bị dữ liệu mô phỏng, bổ sung auth và giao diện xem video đồng bộ telemetry.

## Tuần 4: 05/10–11/10/2026 — Thử nghiệm Qwen và mở rộng review

### Đã hoàn thành theo commit

- **Hoàng Văn Nam:** ghi nhận các vòng thử Qwen/UI (`7af9ada`, **[nhánh khác]**) và VLM (`4f62516`).
- **Nguyễn Hải Hoàng:** bổ sung hướng dẫn thiết lập và báo cáo đánh giá VLM (`75edfab`), biểu đồ telemetry đồng bộ video (`8bd9337`), session auth và quản lý tài khoản (`ff6bfe9`). Các commit này thuộc **[nhánh khác]**.
- **Lê Tuấn Đạt:** cập nhật metric/evidence đánh giá (`c987384`) và code AI/Data để sinh, chấm điểm dữ liệu mô phỏng (`f779a88`). Các commit này thuộc **[nhánh khác]**.
- **Cả nhóm:** cùng tham gia test Qwen theo xác nhận của nhóm. Các mốc commit thử nghiệm trong tuần là căn cứ tham chiếu, không đại diện riêng cho toàn bộ người tham gia.

### Khó khăn và hướng xử lý

| Vấn đề thể hiện trong thay đổi | Hướng xử lý đã ghi nhận |
|---|---|
| Khó đối chiếu lời giải thích VLM với diễn biến video | Bổ sung biểu đồ telemetry và đồng bộ video. |
| Cần dữ liệu có thể lặp lại để thử nghiệm | Bổ sung công cụ sinh và chấm điểm dữ liệu mô phỏng. |
| Cần quản lý phiên và tài khoản cho workflow review | Bổ sung session authentication và quản lý tài khoản. |

### Bài học

Đánh giá VLM cần lưu evidence, không chỉ ghi nhận lời kết luận. Video mô phỏng hỗ trợ tạo tình huống có kiểm soát, nhưng cần đánh giá riêng khả năng áp dụng trên video thực tế.

### Hướng chuyển sang tuần 5

Kết nối Qwen với luồng ứng dụng, chuẩn bị GPU, cải thiện phân tích chuỗi frame và hoàn thiện trải nghiệm review/báo cáo.

## Tuần 5: 12/10–18/10/2026 — Tích hợp GPU, cải thiện Qwen và hoàn thiện demo

### Đã hoàn thành theo commit

- **Hoàng Văn Nam:** nâng Qwen 7B, tối ưu tìm trigger O(n) theo telemetry (`7771cc8`); cập nhật cấu hình frontend/backend và Ollama/Qwen GPU (`e9c9cf6`). Chuyển worker V1 và xử lý media sang Vast qua SSH, điều chỉnh health probe và cấu hình media khi GPU khởi động (`3d0026f`, `5a76cd5`, `04ae7bd`).
- **Hoàng Văn Nam:** bổ sung xác nhận phanh gấp kéo dài, phân tích chuỗi frame, đối chiếu xung đột telemetry, tổng hợp kết luận và giữ trigger memory theo phạm vi (`0c1b6e6`, `4afd7a0`, `2f95e3f`, `50cc0ac`, `f6df3ca`). Giữ metadata review có thể đọc khi GPU offline (`cde9c22`).
- **Hoàng Văn Nam:** ghi nhận thử nghiệm prompt/frame, gồm chuỗi 13 frame và Stage 2 (`afd6b86`, `fe29994`, `d5e3bd1`, `dda5920`, `4c1ca9a`, `4d23068`).
- **Nguyễn Văn Hồng:** tích hợp frontend/auth với Qwen 7B và xử lý hết phiên, phản hồi review, diagnostics/báo cáo (`0407fb9`, `f9ee681`, `8e1dc3b`, **[nhánh khác]**). Xây dựng Galaxy landing, tích hợp auth và cải thiện review (`3227378`, `7575d80`); hoàn thiện theme, báo cáo, fullscreen video và điều hướng upload (`2ca6be1`, `0f14293`).
- **Lê Tuấn Đạt:** điều chỉnh trục thời gian và các mốc sự cố của dữ liệu mô phỏng, tách phần CARLA sang `src/carla_gen`, bổ sung requirements và hướng dẫn sinh clip (`71d082c`, `9216c24`, `2ba1859`, `5a92c1f`, **[nhánh khác]**). Cập nhật pipeline và bộ thử nghiệm Qwen 9B (`e08c73a`).
- **Hoàng Văn Nam:** sửa tích hợp telemetry, chi tiết phân tích và lỗi điều hướng/xuất báo cáo sau merge (`8bc92c1`, `b8b5f8a`, `23fa819`, `b5ea7ae`); hoàn thiện fixture upload, cache runner, schema test và các bước CI frontend (`3acf53b`, `934453c`, `4f2a2e7`, `fc35be0`).
- **Hoàng Văn Nam:** cập nhật README (`f9df53e`, `5841d2c`), tài liệu trình chiếu Demo Day và artifact latency (`f1ff199`), ẩn đầu ra JSON đã lưu khỏi phần review (`1ca27cb`), hoàn thiện worklog và mã học viên (`bb73b55`). Artifact latency là kết quả ghi nhận tại thời điểm đo, không đại diện mọi điều kiện vận hành.

### Hoạt động phối hợp được nhóm xác nhận

- **Lê Tuấn Đạt** sử dụng CARLA sinh video mô phỏng và hỗ trợ chạy Qwen trên GPU Vast.ai. Không gán ngày riêng cho phần hỗ trợ vận hành khi chưa có nhật ký xác nhận.
- **Hoàng Văn Nam, Nguyễn Văn Hồng, Nguyễn Hải Hoàng và Lê Tuấn Đạt** cùng tham gia test Qwen: chạy thử, xem và đối chiếu đầu ra, trao đổi nhận xét phục vụ điều chỉnh prompt/pipeline. Không quy toàn bộ việc test cho tác giả các commit thử nghiệm.

### Khó khăn và hướng xử lý

| Vấn đề thể hiện trong thay đổi | Hướng xử lý đã ghi nhận |
|---|---|
| API, worker, media và GPU chạy ở nhiều nơi | Điều chỉnh worker qua SSH, health probe và cấu hình truy cập media. |
| Kết luận từ frame đơn lẻ thiếu ngữ cảnh thời gian | Phân tích chuỗi frame theo thứ tự và giữ trigger memory theo phạm vi. |
| Telemetry và nhận xét từ video có thể mâu thuẫn | Bổ sung kiểm tra xung đột và hiển thị phép đo phanh để hỗ trợ review. |
| GPU offline ảnh hưởng khả năng xem lại | Giữ metadata review đã xác thực có thể đọc được. |
| Merge giao diện gây lỗi điều hướng và xuất báo cáo | Bổ sung sửa lỗi tích hợp, fixture hồi quy và kiểm tra CI. |

### Bài học

Phải kiểm tra toàn bộ luồng upload, API, worker, GPU và review. Thay đổi prompt cần được so sánh trên cùng dữ liệu và mốc thời gian. Trải nghiệm review cần thể hiện evidence và phần chưa chắc chắn để người dùng có cơ sở đánh giá kết luận AI.

### Kế hoạch tiếp theo — từ 19/10/2026

- [ ] Rà soát và tích hợp các thay đổi còn ở nhánh riêng; chạy kiểm tra hồi quy sau tích hợp.
- [ ] Chốt bộ video test, nhãn đối chiếu và phiên bản prompt/model để so sánh Qwen nhất quán.
- [ ] Đánh giá chất lượng nhận diện, trường hợp bỏ sót/báo sai và thời gian xử lý trên bộ dữ liệu đã chốt.
- [ ] Kiểm tra lại luồng upload → phân tích → review → xuất báo cáo, gồm hết phiên và GPU offline.
- [ ] Hoàn thiện tài liệu vận hành/demo dựa trên evidence đã kiểm tra và cập nhật journal khi có kết quả mới.

## Ghi chú về phạm vi kết quả

Nhật ký này ghi nhận quá trình làm việc, không công bố tỷ lệ chính xác, thời lượng đóng góp hoặc cam kết vận hành khi chưa có dữ liệu xác nhận. Chi tiết công việc theo thành viên và commit nằm trong [WORKLOG.md](WORKLOG.md).
