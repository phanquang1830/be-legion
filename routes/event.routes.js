import express from 'express';
const router = express.Router();
import {
    getAllListEvent,
    getEventById,
    createEvent
} from '../controllers/event.controller.js'
import paginateWithSearch from '../middlewares/paginate.middleware.js';
import Event from '../models/event.model.js';

router.route('/')
    .get(paginateWithSearch(Event, 'name'),getAllListEvent)
    .post(createEvent)

router.route('/:id').get(getEventById)

export default router