// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file



const dbURI = process.env.MONGODB_URI // Ensure you have set this in your .env file
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};
export default connectDB;

