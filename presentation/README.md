# Pitch Deck và Demo Day

## File thuyết trình

- [Pitch deck PowerPoint 10 slide](output/pitch_deck.pptx)
- Mỗi slide có speaker notes tiếng Việt: lời dẫn, thời lượng, nguồn đối chiếu và giới hạn của kết quả.
- Nền tối, chữ sáng; chữ chỉnh sửa được từ 24pt trở lên. Sơ đồ kiến trúc và graph dùng đối tượng PowerPoint chỉnh sửa được.

## Nội dung và thời lượng

| Slide | Nội dung | Thời lượng |
|---|---|---|
| 1 | IncidentLens, tagline và Team P-076 | 45 giây |
| 2 | Vấn đề và người dùng mục tiêu | 50 giây |
| 3 | Giải pháp | 50 giây |
| 4 | Sản phẩm và luồng sử dụng | 55 giây |
| 5 | Kiến trúc và lựa chọn công nghệ | 50 giây |
| 6 | AI, prompt, graph mẫu và đánh giá | 55 giây |
| 7 | CI và guardrail hai lớp | 50 giây |
| 8 | Demo video | 150 giây |
| 9 | Thách thức và bài học | 40 giây |
| 10 | Team, bước tiếp theo và mời Q&A | 55 giây |

Tổng: **10 phút**, gồm 2 phút 30 giây dành cho video. Nếu BTC tính Q&A riêng, kết thúc slide 10 rồi chuyển sang thời gian hỏi đáp. Chọn một người nói chính và tập ít nhất ba lượt có bấm giờ.

## Các phần để trống theo yêu cầu

- Ngày Demo Day ở slide 1.
- Nội dung slide 8, chỉ giữ tiêu đề để thêm video hoặc QR YouTube sau.
- URL và QR trải nghiệm ở slide 10.

Chưa có file video demo. Không dùng QR localhost hoặc tự tạo URL công khai. Khi có thông tin, bổ sung trực tiếp bằng PowerPoint. Chữ P-076 là wordmark tạm, thay bằng logo chính thức nếu nhóm có.

## Nội dung cần nhóm xác nhận trước buổi thi

- Tên hiển thị và vai trò thành viên hiện tổng hợp từ Git/worklog, chưa thay thế phân công chính thức.
- LangGraph đang là khung mẫu, chưa điều phối pipeline video; Vector Store chưa tích hợp.
- Chưa có golden dataset chuyên gia được khóa hoặc số đo coverage/chất lượng/hiệu năng hiện hành. Không đọc mục tiêu đánh giá thành kết quả thực tế.
- CI trong deck là workflow đã cấu hình, không phải tuyên bố một lần chạy CI/deployment mới đã thành công.
- Screenshot lấy từ repository, có thể chứa dữ liệu demo.

## Kịch bản quay video 2 phút 30 giây

1. **0:00–0:20:** giới thiệu hồ sơ, tải MP4 và CSV nếu có.
2. **0:20–0:45:** gửi phân tích, xem trạng thái và tiến độ.
3. **0:45–1:30:** mở workspace, đối chiếu video, timeline và evidence.
4. **1:30–2:05:** sửa báo cáo, gửi duyệt.
5. **2:05–2:30:** minh họa quyết định theo quyền và lịch sử thay đổi.

Nếu cắt thời gian chờ, ghi rõ trong video. Chỉ dùng dữ liệu được phép công bố, tránh lộ tài khoản, token và thông tin cá nhân.

## Backup demo ba tầng

1. Ứng dụng live đã kiểm tra end-to-end, warm model và mở sẵn hồ sơ.
2. Video MP4 đã quay, có bản offline trên máy thuyết trình.
3. Screenshot và báo cáo đã chuẩn bị để dẫn lại cùng use case.

Trước buổi trình bày, kiểm tra font, video offline, link/QR, độ đọc trên máy chiếu và thời lượng. Phần graph/Vector Store phải giữ nhãn trạng thái để tránh mô tả tính năng chưa tích hợp như đã hoàn thiện.
