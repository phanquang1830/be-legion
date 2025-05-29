import Event from '../models/event.model.js'
import asyncHandler from 'express-async-handler';
import paginateWithSearch from '../middlewares/paginate.middleware.js';

// @desc Fetch Event
// @route GET /api/event
// @access Public
const getAllListEvent = asyncHandler (async (req, res) =>{
    const event = await Event.find();
    res.json(res.paginatedResult);
});

// @desc Fetch single Event 
// @route GET /api/event/:id
// @access Public
const getEventById = asyncHandler (async (req, res) =>{
    const event = await Event.findById(req.params.id);
    return res.json(event || {} );
});

const createEvent = asyncHandler (async (req, res) =>{
    const event = req.body;
    console.log(req.body)

    const createEvent = await new Event ({
        name: event.name,
        slug: event.slug,
        host: event.host,
        community_member_id: event.community_member_id,
        in_person_location: event.in_person_location,
        starts_at: event.starts_at,
        ends_at: event.ends_at,
        create_at: event.create_at,
        updated_at: event.updated_at,
        url: event.url,
        cover_image_url: event.cover_image_url,
        description: event.description,
        price: event.price,
        max_attendees: event.max_attendees,
        current_attendees: event.current_attendees,
        status: event.status,
        category: event.category,
        location_URL: event.location_URL
    }).save();
    res.status(201).json(createEvent)
})

export {
    getAllListEvent,
    getEventById,
    createEvent
};