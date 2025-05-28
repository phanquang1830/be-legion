import asyncHandler from "express-async-handler";
import Event from "../models/Event.model.js";
import createError from "../utils/createError.js";
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
    const event = await Event.findById(id);
    if (!event) {
        throw new createError("Event not found",404);
    } else {
        res.status(200).json(event);
    }
}
);

export {
    getAllEventController,
    getEventByIdController
};