// seed.js
import mongoose from 'mongoose';
import Event from './models/Event.model.js'; // Đảm bảo đường dẫn đúng tới model Event
const sampleEvents = [
  {
    title: "Vietnam Gameverse 2025",
    description: "Festival HCM",
    startDate: "2025-05-24",
    endDate: "2025-05-25",
    location: "SECC, Quận 7",
    cover_image_url: "https://example.com/images/event1.jpg"
  },
  {
    title: "Tech Day 2025",
    description: "Công nghệ toàn quốc",
    startDate: "2025-06-10",
    endDate: "2025-06-11",
    location: "FPT Software Campus",
    cover_image_url: "https://example.com/images/event2.jpg"
  },
  {
    title: "Startup Open Day",
    description: "Giao lưu khởi nghiệp",
    startDate: "2025-07-05",
    endDate: "2025-07-05",
    location: "FTU Hà Nội",
    cover_image_url: "https://example.com/images/event3.jpg"
  },
  {
    title: "AI Hackathon 2025",
    description: "Cuộc thi lập trình AI",
    startDate: "2025-08-15",
    endDate: "2025-08-17",
    location: "ĐH Bách Khoa TP.HCM",
    cover_image_url: "https://example.com/images/event4.jpg"
  },
  {
    title: "Developer Conference VN",
    description: "Hội nghị lập trình viên toàn quốc",
    startDate: "2025-09-20",
    endDate: "2025-09-21",
    location: "NCC Hanoi",
    cover_image_url: "https://example.com/images/event5.jpg"
  }
];

mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
  .then(async () => {
    await Event.deleteMany(); // Xoá dữ liệu cũ nếu có
    await Event.insertMany(sampleEvents);
    console.log("✅ Đã thêm 5 sự kiện mẫu vào MongoDB");
    mongoose.disconnect();
  })
  .catch(console.error);
