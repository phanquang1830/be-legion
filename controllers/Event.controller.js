import asyncHandler from "express-async-handler";
import Event from "../models/Event.model.js";
import createError from "../middlewares/createError.middleware.js";
import paginate from "../middlewares/paginate.middleware.js";

// @desc    Get all events
// @route   GET /api/events 
// @access  Public
const getAllEventController = (req, res) => {
    res.status(200).json(res.paginatedResult);
};

// @desc    Get event by ID 
// @route   GET /api/events/:id
// @access  Public
const getEventByIdController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // Tìm theo primary key (event_id) hoặc trường id khác nếu bạn đặt tên khác
    const event = await Event.findOne({ where: { event_id: id } });
    if (!event) {
        throw new createError("ID Event không tồn tại", 404);
    }
    res.status(200).json(event);
});

export {
    getAllEventController,
    getEventByIdController
};