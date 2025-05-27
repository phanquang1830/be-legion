import mongoose from 'mongoose';
const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,  // đảm bảo id là duy nhất
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
  },
  cover_image_url: {
    type: String,
  },
}, { 
  collection: 'events' // tên collection trong MongoDB
});
const Event = mongoose.model('Event', eventSchema);
export default Event;