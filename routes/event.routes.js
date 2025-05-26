import express from 'express';
const router = express.Router();
import {
    getAllListEvent,
    getEventById
} from '../controllers/event.controller.js'

router.route('/').get(getAllListEvent)

router.route('/:id').get(getEventById)

export default router