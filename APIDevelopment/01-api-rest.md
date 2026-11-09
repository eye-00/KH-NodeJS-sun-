# API VÀ REST

API là giao diện giúp các phần mềm trao đổi dữ liệu theo một hợp đồng. Ví dụ: ứng dụng gửi yêu cầu lấy danh sách người dùng; máy chủ xử lý và trả kết quả.
```
Client  -- HTTP request -->  Server
Client  <-- HTTP response -- Server
```
REST là tập nguyên tắc thiết kế hệ thống phân tán. RESTful API thường dùng HTTP và JSON, nhưng REST không bắt buộc dùng riêng hai công nghệ này. Các ý chính:
- Client và server độc lập về trách nhiệm.
- Stateless: mỗi request chứa thông tin cần thiết để xử lý; server không dựa vào trạng thái phiên hội thoại lưu giữa các request.
- Tài nguyên được nhận diện bằng URL; client thao tác thông qua giao diện thống nhất. Có thể dùng cơ chế cache và hệ thống nhiều lớp khi phù hợp.

Phương thức HTTP thường gặp:
```
GET     /api/v1/users     Lấy danh sách; không yêu cầu thay đổi dữ liệu.
GET     /api/v1/users/1   Lấy người dùng có id 1.
POST    /api/v1/users     Tạo người dùng mới.
PUT     /api/v1/users/1   Thay thế biểu diễn người dùng theo hợp đồng API.
PATCH   /api/v1/users/1   Cập nhật một phần thông tin.
DELETE  /api/v1/users/1   Xóa người dùng.
```

Nên đặt tên tài nguyên bằng danh từ, dùng phương thức HTTP thể hiện thao tác và thiết kế lỗi nhất quán. GET, PUT và DELETE có tính idempotent theo ngữ nghĩa HTTP: lặp lại cùng yêu cầu có tác dụng dự kiến như thực hiện một lần; POST không mặc định có tính chất này.
