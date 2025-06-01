import express from 'express';
const router = express.Router();
import {
    getAllListEvent,
    getEventById,
    createEvent
} from '../controllers/event.controller.js'

router.route('/')
    .get(getAllListEvent)
    .post(createEvent)

router.route('/:id').get(getEventById)

export default router