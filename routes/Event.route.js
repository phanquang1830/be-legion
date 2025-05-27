// routes/event.routes.js
import express from "express";
import EventController from "../controllers/EventController.js";

const router = express.Router();

// Lấy danh sách tất cả sự kiện
router.route("/")
.get(EventController.getAllEventsController);

// Lấy thông tin sự kiện theo ID (nên dùng query hoặc route param cho chuẩn REST)
router.route("/:id")
.get(EventController.getEventByIdController);

// Export hàm để khởi tạo route vào app

export default (router);
