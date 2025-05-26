import Event from '../models/event.model.js'
import asyncHandler from 'express-async-handler';

const getAllListEvent = asyncHandler (async (req, res) =>{
    const event = await Event.find();
    res.json({Event: event});
});

const getEventById = asyncHandler (async (req, res) =>{
    const event = await Event.findById(req.params.id);
    return res.json(event || {} );
});

export {
    getAllListEvent,
    getEventById
};