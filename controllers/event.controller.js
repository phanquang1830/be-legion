import Event from '../models/event.model.js'
import asyncHandler from 'express-async-handler';

// @desc Fetch Event
// @route GET /api/event
// @access Public
const getAllListEvent = asyncHandler (async (req, res) =>{
    const event = await Event.find();
    res.json({Event: event});
});

// @desc Fetch single Event 
// @route GET /api/event/:id
// @access Public
const getEventById = asyncHandler (async (req, res) =>{
    const event = await Event.findById(req.params.id);
    if (!event) {
        res.status(404);
        throw new Error("Không tìm thấy sự kiện");
    }
    res.json(event);
});

export {
    getAllListEvent,
    getEventById,
    createEvent
};