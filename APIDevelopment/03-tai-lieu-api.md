# TÀI LIỆU API

Tài liệu API mô tả hợp đồng để người dùng API biết cách gửi request và xử lý response. Với mỗi endpoint, ghi rõ:
- Mục đích, HTTP method, đường dẫn và phiên bản/base URL.
- Xác thực/quyền cần thiết nếu có.
- Path/query parameters, headers và body: tên, kiểu, bắt buộc hay tùy chọn, giới hạn hợp lệ.
- Mã trạng thái, cấu trúc dữ liệu trả về, ví dụ thành công và lỗi.

Ví dụ hợp đồng minh họa (không phải server đang chạy):
```
POST /api/v1/users
Content-Type: application/json
```

Body: name (string, bắt buộc, không rỗng).

`{ "name": "An" }`

Thành công: 201 Created; header Location: `/api/v1/users/1`

`{ "data": { "id": 1, "name": "An" } }`

Lỗi: 400 Bad Request khi name thiếu hoặc rỗng.
`{ "error": { "code": "INVALID_NAME", "message": "Tên không được để trống" } }`


`GET /api/v1/users/1` có thể trả 200 cùng object data như trên hoặc 404 nếu không tìm thấy. Mã lỗi và cấu trúc chỉ là ví dụ; hệ thống thực tế cần ghi đúng hành vi triển khai.

Có thể dùng OpenAPI để mô tả hợp đồng dưới dạng YAML/JSON và dùng công cụ tương thích để hiển thị hoặc kiểm thử. Luôn cập nhật tài liệu khi hợp đồng thay đổi.
