# Hướng dẫn chạy dự án be-legion

## 1. Yêu cầu môi trường
- Node.js >= 16
- MongoDB (có thể dùng MongoDB Atlas hoặc local)

## 2. Cài đặt package
```bash
npm install
```

## 3. Tạo file cấu hình môi trường

Tạo file `.env` ở thư mục gốc dự án với nội dung như sau :

```
MONGODB_URI = mongodb+srv://dbEvent:admin123@cluster0.bg84pcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=(3000 || tùy chỉnhchỉnh)
```

> **Lưu ý:** File `.env` KHÔNG được đưa lên git, bạn cần tự tạo file này.

## 4. Seed dữ liệu mẫu (tùy chọn)
Nếu muốn có dữ liệu mẫu, chạy:
```bash
node seed.js
```

## 5. Chạy dự án
```bash
npm start
```
Hoặc nếu muốn chạy ở chế độ dev (tự động reload khi sửa code):
```bash
npm run dev
```

## 6. Truy cập API
- Mặc định API sẽ chạy ở: [http://localhost:3000/api](http://localhost:3000/api)
- Có thể xem tài liệu API tại file `event.api.swagger.yaml` hoặc import vào Swagger Editor.

---
```<!-- filepath: e:\MyProjects\be-legion\README.md -->

