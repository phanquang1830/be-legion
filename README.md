# Hướng dẫn chạy dự án be-legion

## 1. Yêu cầu môi trường
- Node.js >= 16
- MySQL Server (cài local hoặc dùng cloud)

## 2. Tải mã nguồn & chuẩn bị
- Clone dự án từ GitHub về máy:
  ```bash
  git clone <link-repo>
  cd be-legion
  ```

## 3. Tạo file cấu hình môi trường

Tạo file `.env` ở thư mục gốc dự án với nội dung ví dụ như sau (tùy chỉnh lại cho phù hợp):

```
MYSQL_DATABASE=ten_db
MYSQL_USER=ten_user
MYSQL_PASSWORD=mat_khau
MYSQL_HOST=localhost
MYSQL_PORT=3306

PORT=3000
```

> **Lưu ý:** File `.env` KHÔNG được đưa lên git, bạn cần tự tạo file này.

## 4. Seed dữ liệu mẫu (tùy chọn)
Nếu muốn có dữ liệu mẫu, chạy:
```bash
node seed.js(tôi đã chạy săn r nên bạn không cần chạychạy)
```

## 5. Chạy dự án
Chỉ cần chạy:
```bash
npm start
```
Lệnh này sẽ tự động cài package (nếu chưa có) và khởi động server.

Hoặc nếu muốn chạy ở chế độ dev (tự động reload khi sửa code):
```bash
npm run dev
```

## 6. Truy cập API
- Mặc định API sẽ chạy ở: [http://localhost:3000/api](http://localhost:3000/api)
- Có thể xem tài liệu API tại file `event.api.swagger.yaml` hoặc import vào [Swagger Editor](https://editor.swagger.io/).

---

