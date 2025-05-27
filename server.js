import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Adjust the path as necessary

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send('Hello world ');
})


app.listen(PORT, () =>{
    console.log(`App listen on port ${PORT}`)
})

