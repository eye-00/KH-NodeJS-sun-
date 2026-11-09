# XÁC THỰC VÀ PHÂN QUYỀN API

Authentication xác minh danh tính; authorization xác định danh tính đó được phép làm gì. Thông tin đăng nhập và token phải được truyền qua HTTPS.

1. Basic Authentication
Client gửi header Authorization: Basic <base64(username:password)>. Base64 chỉ là cách mã hóa biểu diễn, không bảo mật; cần HTTPS và không ghi thông tin này vào log.

2. Cookie và session
- Sau khi đăng nhập, server tạo session và gửi session ID trong cookie. Những request sau gửi cookie để server tra cứu session; đăng xuất thì server hủy session.
- Có thể thu hồi session ở server, nhưng cần nơi lưu session và cơ chế lưu chung khi có nhiều server.
- Cookie nên có HttpOnly, Secure, SameSite phù hợp; vẫn cần xem xét bảo vệ CSRF cho các thao tác thay đổi dữ liệu.

3. JWT và Bearer token
Client thường gửi Authorization: Bearer <access-token>. JWT dạng header.payload.signature khi được ký (JWS):
- Header mô tả thuật toán; payload chứa claims như iss (bên cấp), sub (đối tượng), exp (thời điểm hết hạn).
- Header và payload thường chỉ được mã hóa Base64URL, có thể đọc được; không đặt mật khẩu hoặc dữ liệu nhạy cảm vào đó.
- Server phải kiểm tra chữ ký, thuật toán cho phép, thời hạn và các claims liên quan như issuer/audience; sau đó vẫn phải kiểm tra quyền truy cập.
- Chữ ký giúp phát hiện thay đổi, không tự mã hóa nội dung. Thu hồi token còn hiệu lực cần cơ chế bổ sung, ví dụ danh sách thu hồi hoặc thời hạn ngắn.

4. OAuth và token
- OAuth là cơ chế ủy quyền cho ứng dụng truy cập tài nguyên theo phạm vi được cấp, không cần chia sẻ mật khẩu của người dùng với ứng dụng.
- OAuth 1.0 dùng chữ ký cho request; OAuth 2.0 định nghĩa các luồng cấp access token. OAuth 2.0 không tự là giao thức đăng nhập; OpenID Connect bổ sung lớp định danh.
- Access token dùng để gọi tài nguyên; refresh token có thể dùng để xin access token mới và cần được bảo vệ, có thể bị thu hồi. Không phải mọi luồng đều cấp refresh token.
- Với ứng dụng người dùng, thường dùng Authorization Code + PKCE; không đưa secret vào mã chạy công khai trên trình duyệt.

<<<<<<< HEAD
=======
Nguồn tham khảo: https://github.com/itsdoanguen/NodeJS-Course/tree/main/APIDevelopment
>>>>>>> 4a63918089fbe72a8ae2db7b990365cbb38e26db
