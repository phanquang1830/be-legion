import express from 'express'

import {
    userLogin,
    registerUser
} from '../controllers/user.controller.js'

const router = express.Router();

router.post('/login', userLogin)

router.post('/register', registerUser)

export default router