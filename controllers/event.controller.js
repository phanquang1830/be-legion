import Event from '../models/event.model.js'
import asyncHandler from 'express-async-handler';

// @desc Fetch Event
// @route GET /api/event
// @access Public
const getAllListEvent = asyncHandler (async (req, res) =>{
    res.json({
        statusCode: 200,
        message: 'Get Event success',
        ...res.paginatedResult,
    });
});

// @desc Fetch single Event 
// @route GET /api/event/:id
// @access Public
const getEventById = asyncHandler (async (req, res) =>{
    const event = await Event.findByPk(req.params.id);

    if(!event) {
        res.status(404)
        throw new Error("Event not Found")
    }
    return res.json({
        statusCode: 200,
        message: 'Get Event By Id Success',
        data: event
    });
});

const createEvent = asyncHandler(async (req, res) => {
  const event = req.body
  console.log(req.body)

  // Sequelize dùng create() thay vì new Event().save()
  const createdEvent = await Event.create({
    name: event.name,
    slug: event.slug,
    host: event.host,
    community_member_id: event.community_member_id,
    in_person_location: event.in_person_location,
    starts_at: event.starts_at,
    ends_at: event.ends_at,
    created_at: event.created_at, 
    updated_at: event.updated_at,
    url: event.url,
    cover_image_url: event.cover_image_url,
    description: event.description,
    price: event.price,
    max_attendees: event.max_attendees,
    current_attendees: event.current_attendees,
    status: event.status,
    category: event.category,
    location_URL: event.location_URL,
  })

  res.status(201).json(createdEvent)
})

export {
    getAllListEvent,
    getEventById,
    createEvent
};