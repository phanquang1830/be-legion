import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Adjust the path as necessary
import eventRoutes from './routes/Event.routes.js'; // Adjust the path as necessary
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/events', eventRoutes); // Use the event routes
app.use(errorHandler); // Use the error handler middleware

app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

