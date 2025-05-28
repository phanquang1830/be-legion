import asyncHandler from "express-async-handler";
import Event from "../models/Event.model.js";
import createError from "../utils/createError.js";
import mongoose from "mongoose";

// @desc    Get all events
// @route   GET /api/events 
// @access  Public
const getAllEventController = asyncHandler(async (req, res) => {
    const events = await Event.find({});
    res.status(200).json(events);
});

// @desc    Get event by ID 
// @route   GET /api/events/:id
// @access  Public
const getEventByIdController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    let event = null;

    // Nếu id là ObjectId hợp lệ, thử tìm theo _id trước
    if (mongoose.Types.ObjectId.isValid(id)) {
        event = await Event.findById(id);
    }
    // Nếu không tìm thấy, thử tìm theo trường id tự định nghĩa
    if (!event) {
        event = await Event.findOne({ id });
    }
    if (!event) {
        throw new createError("ID Event không tồn tại", 404);
    }
    res.status(200).json(event);
}
);

export {
    getAllEventController,
    getEventByIdController
};