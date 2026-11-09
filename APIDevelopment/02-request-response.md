# HTTP REQUEST VÀ RESPONSE

HTTP dùng mô hình client gửi request và server trả response.

Ví dụ request tạo người dùng:
```
POST /api/v1/users HTTP/1.1
Host: api.example.com
Content-Type: application/json

{ "name": "An" }
```

Request gồm dòng bắt đầu (phương thức, đường dẫn), headers (metadata) và body tùy chọn. Những nơi truyền dữ liệu thường dùng:
- Path parameter: /api/v1/users/1 xác định id 1.
- Query parameter: /api/v1/users?page=2&limit=10 để phân trang.
- Header: Content-Type cho biết định dạng body; Authorization mang thông tin xác thực.
- Body: dữ liệu gửi trong request, ví dụ JSON khi tạo hoặc cập nhật.

Ví dụ response thành công:
```
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/v1/users/1

{ "data": { "id": 1, "name": "An" } }
```
Response gồm dòng trạng thái, headers và body tùy chọn. Một số mã thường gặp:
- 200 OK: xử lý thành công và thường có dữ liệu.
- 201 Created: đã tạo tài nguyên; Location có thể chỉ URL tài nguyên mới.
- 204 No Content: thành công, không có response body.
- 400 Bad Request: dữ liệu hoặc cú pháp yêu cầu không hợp lệ.
- 401 Unauthorized: thiếu hoặc sai thông tin xác thực.
- 403 Forbidden: đã hiểu yêu cầu nhưng từ chối cho phép.
- 404 Not Found: không tìm thấy tài nguyên.
- 409 Conflict: xung đột với trạng thái hiện tại.
- 500 Internal Server Error: lỗi không mong đợi ở server.

Các nhóm mã: 1xx thông tin, 2xx thành công, 3xx chuyển hướng, 4xx lỗi phía client, 5xx lỗi phía server.
