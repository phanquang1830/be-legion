import express from 'express'
import dotenv from 'dotenv'

import connectDB from './config/db.js';
import eventRouter from './routes/event.routes.js'
import { notFound, errorHandler } from './middlewares/error.middleware.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000 

app.use(express.json())

app.use('/api/event', eventRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

