import mongoose from 'mongoose';
import Event from './models/Event.model.js';

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

const sampleEventsWithId = sampleEvents.map((event, index) => ({
  id: `event${index + 1}`,
  ...event,
  startDate: new Date(event.startDate),
  endDate: new Date(event.endDate)
}));

mongoose.connect('mongodb+srv://dbEvent:admin123@cluster0.bg84pcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(async () => {
    console.log("✅ Đã kết nối MongoDB");

    await Event.deleteMany();
    console.log("🗑️ Đã xoá dữ liệu cũ");

    try {
      await Event.insertMany(sampleEventsWithId, { ordered: false });
      console.log("✅ Đã thêm 5 sự kiện mẫu vào MongoDB");
    } catch (error) {
      console.error("❌ Lỗi khi thêm một số sự kiện:", error);
    }

    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Lỗi kết nối MongoDB:", err);
  });
