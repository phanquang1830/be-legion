import asyncHandler from "express-async-handler";
import Event from "../models/Event.model.js";
import createError from "../middlewares/createError.middleware.js";
import paginate from "../middlewares/paginate.middleware.js";

// @desc    Get all events
// @route   GET /api/events 
// @access  Public
const getAllEventController = (req, res) => {
    res.status(200).json({
        message: "Lấy danh sách sự kiện thành công",
        ...res.paginatedResult
    });
};

// @desc    Get event by ID 
// @route   GET /api/events/:id
// @access  Public
const getEventByIdController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const event = await Event.findOne({ where: { event_id: id } });
    if (!event) {
        throw new createError("ID Event không tồn tại", 404);
    }
    res.status(200).json({
        message: "Lấy sự kiện thành công",
        data: event
    });
});

export {
    getAllEventController,
    getEventByIdController
};