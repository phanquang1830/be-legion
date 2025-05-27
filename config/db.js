import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI); // Không cần các tùy chọn cũ
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
