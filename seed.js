import dotenv from 'dotenv';
import { sequelize } from './config/db.js';
import Event from './models/Event.model.js';

dotenv.config();

const sampleEvents = [
  {
    event_id: "event1",
    name: "Vietnam Gameverse 2025",
    slug: "vietnam-gameverse-2025",
    host: "Gameverse Org",
    community_member_id: "7a4e2b3f-cc3d-4f2c-90ab-23a5f01b9a78",
    in_person_location: "SECC, Quận 7",
    starts_at: new Date("2025-05-24"),
    ends_at: new Date("2025-05-25"),
    url: "https://su-kien/vietnam-gameverse-2025",
    cover_image_url: "https://example.com/images/event1.jpg",
    description: "Festival game lớn nhất Việt Nam 2025.",
    price: 250000,
    max_attendees: 500,
    current_attendees: 120,
    status: "upcoming",
    category: "festival",
    location_URL: "https://goo.gl/maps/abc1"
  },
  {
    event_id: "event2",
    name: "Tech Day 2025",
    slug: "tech-day-2025",
    host: "FPT Software",
    community_member_id: "8b4e2b3f-cc3d-4f2c-90ab-23a5f01b9a79",
    in_person_location: "FPT Software Campus",
    starts_at: new Date("2025-06-10"),
    ends_at: new Date("2025-06-11"),
    url: "https://su-kien/tech-day-2025",
    cover_image_url: "https://example.com/images/event2.jpg",
    description: "Ngày hội công nghệ toàn quốc.",
    price: 0,
    max_attendees: 1000,
    current_attendees: 800,
    status: "upcoming",
    category: "talk",
    location_URL: "https://goo.gl/maps/abc2"
  },
  {
    event_id: "event3",
    name: "Startup Open Day",
    slug: "startup-open-day",
    host: "FTU Hà Nội",
    community_member_id: "9c4e2b3f-cc3d-4f2c-90ab-23a5f01b9a80",
    in_person_location: "FTU Hà Nội",
    starts_at: new Date("2025-07-05"),
    ends_at: new Date("2025-07-05"),
    url: "https://su-kien/startup-open-day",
    cover_image_url: "https://example.com/images/event3.jpg",
    description: "Giao lưu khởi nghiệp trẻ.",
    price: 100000,
    max_attendees: 300,
    current_attendees: 150,
    status: "upcoming",
    category: "networking",
    location_URL: "https://goo.gl/maps/abc3"
  },
  {
    event_id: "event4",
    name: "AI Hackathon 2025",
    slug: "ai-hackathon-2025",
    host: "BKAI",
    community_member_id: "1d4e2b3f-cc3d-4f2c-90ab-23a5f01b9a81",
    in_person_location: "ĐH Bách Khoa TP.HCM",
    starts_at: new Date("2025-08-15"),
    ends_at: new Date("2025-08-17"),
    url: "https://su-kien/ai-hackathon-2025",
    cover_image_url: "https://example.com/images/event4.jpg",
    description: "Cuộc thi lập trình AI toàn quốc.",
    price: 0,
    max_attendees: 200,
    current_attendees: 80,
    status: "upcoming",
    category: "hackathon",
    location_URL: "https://goo.gl/maps/abc4"
  },
  {
    event_id: "event5",
    name: "Developer Conference VN",
    slug: "developer-conference-vn",
    host: "DevConf",
    community_member_id: "2e4e2b3f-cc3d-4f2c-90ab-23a5f01b9a82",
    in_person_location: "NCC Hanoi",
    starts_at: new Date("2025-09-20"),
    ends_at: new Date("2025-09-21"),
    url: "https://su-kien/developer-conference-vn",
    cover_image_url: "https://example.com/images/event5.jpg",
    description: "Hội nghị lập trình viên toàn quốc.",
    price: 300000,
    max_attendees: 600,
    current_attendees: 350,
    status: "upcoming",
    category: "conference",
    location_URL: "https://goo.gl/maps/abc5"
  },
  {
    event_id: "event6",
    name: "Cosplay Festival 2025",
    slug: "cosplay-festival-2025",
    host: "Cosplay Club",
    community_member_id: "3f4e2b3f-cc3d-4f2c-90ab-23a5f01b9a83",
    in_person_location: "Nhà Văn Hóa Thanh Niên",
    starts_at: new Date("2025-10-10"),
    ends_at: new Date("2025-10-11"),
    url: "https://su-kien/cosplay-festival-2025",
    cover_image_url: "https://example.com/images/event6.jpg",
    description: "Lễ hội cosplay lớn nhất năm.",
    price: 120000,
    max_attendees: 400,
    current_attendees: 200,
    status: "upcoming",
    category: "cosplay",
    location_URL: "https://goo.gl/maps/abc6"
  },
  {
    event_id: "event7",
    name: "Yoga Retreat 2025",
    slug: "yoga-retreat-2025",
    host: "Yoga Life",
    community_member_id: "4g4e2b3f-cc3d-4f2c-90ab-23a5f01b9a84",
    in_person_location: "Đà Lạt",
    starts_at: new Date("2025-11-05"),
    ends_at: new Date("2025-11-07"),
    url: "https://su-kien/yoga-retreat-2025",
    cover_image_url: "https://example.com/images/event7.jpg",
    description: "Chương trình yoga nghỉ dưỡng.",
    price: 500000,
    max_attendees: 100,
    current_attendees: 60,
    status: "upcoming",
    category: "yoga",
    location_URL: "https://goo.gl/maps/abc7"
  },
  {
    event_id: "event8",
    name: "Blockchain Summit 2025",
    slug: "blockchain-summit-2025",
    host: "Blockchain Assoc",
    community_member_id: "5h4e2b3f-cc3d-4f2c-90ab-23a5f01b9a85",
    in_person_location: "Gem Center",
    starts_at: new Date("2025-12-01"),
    ends_at: new Date("2025-12-02"),
    url: "https://su-kien/blockchain-summit-2025",
    cover_image_url: "https://example.com/images/event8.jpg",
    description: "Hội nghị Blockchain Việt Nam.",
    price: 400000,
    max_attendees: 350,
    current_attendees: 200,
    status: "upcoming",
    category: "summit",
    location_URL: "https://goo.gl/maps/abc8"
  },
  {
    event_id: "event9",
    name: "Women in Tech 2025",
    slug: "women-in-tech-2025",
    host: "WomenTech",
    community_member_id: "6i4e2b3f-cc3d-4f2c-90ab-23a5f01b9a86",
    in_person_location: "RMIT HCM",
    starts_at: new Date("2025-12-15"),
    ends_at: new Date("2025-12-15"),
    url: "https://su-kien/women-in-tech-2025",
    cover_image_url: "https://example.com/images/event9.jpg",
    description: "Sự kiện dành cho nữ giới trong ngành công nghệ.",
    price: 0,
    max_attendees: 250,
    current_attendees: 180,
    status: "upcoming",
    category: "talk",
    location_URL: "https://goo.gl/maps/abc9"
  },
  {
    event_id: "event10",
    name: "Networking Night 2025",
    slug: "networking-night-2025",
    host: "BizNet",
    community_member_id: "7j4e2b3f-cc3d-4f2c-90ab-23a5f01b9a87",
    in_person_location: "The Reverie Saigon",
    starts_at: new Date("2025-12-20"),
    ends_at: new Date("2025-12-20"),
    url: "https://su-kien/networking-night-2025",
    cover_image_url: "https://example.com/images/event10.jpg",
    description: "Đêm giao lưu kết nối doanh nghiệp.",
    price: 200000,
    max_attendees: 150,
    current_attendees: 90,
    status: "upcoming",
    category: "networking",
    location_URL: "https://goo.gl/maps/abc10"
  },
  // 15 sự kiện mẫu tiếp theo (tạo tự động)
  ...Array.from({ length: 15 }, (_, i) => ({
    event_id: `event${i + 11}`,
    name: `Sample Event ${i + 11}`,
    slug: `sample-event-${i + 11}`,
    host: `Host ${i + 11}`,
    community_member_id: `member${i + 11}`,
    in_person_location: `Location ${i + 11}`,
    starts_at: new Date(`2026-01-${(i % 28) + 1}`),
    ends_at: new Date(`2026-01-${(i % 28) + 2}`),
    url: `https://su-kien/sample-event-${i + 11}`,
    cover_image_url: `https://example.com/images/event${i + 11}.jpg`,
    description: `Mô tả sự kiện mẫu số ${i + 11}`,
    price: 100000 + i * 10000,
    max_attendees: 100 + i * 10,
    current_attendees: 50 + i * 5,
    status: "upcoming",
    category: "sample",
    location_URL: `https://goo.gl/maps/abc${i + 11}`
  }))
];

(async () => {
  try {
    await sequelize.sync({ force: true }); // Xóa và tạo lại bảng
    console.log("✅ Đã đồng bộ bảng Event");

    await Event.bulkCreate(sampleEvents);
    console.log(`✅ Đã thêm ${sampleEvents.length} sự kiện mẫu vào MySQL`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Lỗi khi seed dữ liệu:", error);
    process.exit(1);
  }
})();
