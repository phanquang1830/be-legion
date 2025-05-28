import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    description: 'ID duy nhất của Event, tự động tăng'
  },
  name: {
    type: String,
    required: true,
    description: 'Tên Event'
  },
  slug: {
    type: String,
    description: 'URL thân thiện của Event'
  },
  host: {
    type: String,
    description: 'Người tổ chức Event'
  },
  community_member_id: {
    type: String,
    description: 'ID của thành viên tổ chức'
  },
  in_person_location: {
    type: String,
    description: 'Địa điểm tổ chức Event'
  },
  starts_at: {
    type: Date,
    required: true,
    description: 'Thời gian Event bắt đầu'
  },
  ends_at: {
    type: Date,
    required: true,
    description: 'Thời gian Event kết thúc'
  },
  created_at: {
    type: Date,
    default: Date.now,
    description: 'Thời gian tạo Event'
  },
  updated_at: {
    type: Date,
    default: Date.now,
    description: 'Thời gian cập nhật Event gần nhất'
  },
  url: {
    type: String,
    description: 'URL đầy đủ của Event'
  },
  cover_image_url: {
    type: String,
    description: 'URL ảnh bìa của Event'
  },
  description: {
    type: String,
    description: 'Mô tả chi tiết Event'
  },
  price: {
    type: Number,
    description: 'Giá vé hoặc phí tham dự (Đơn vị VND)'
  },
  max_attendees: {
    type: Number,
    description: 'Số lượng người tham gia tối đa'
  },
  current_attendees: {
    type: Number,
    description: 'Số lượng người đăng kí'
  },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'finished', 'cancelled'],
    description: 'Trạng thái (upcoming/ongoing/finished/cancelled)'
  },
  category: {
    type: String,
    description: 'Loại Event (workshop/talk/networking/yoga...)'
  },
  location_URL: {
    type: String,
    description: 'URL Google Map của Event'
  }
}, {
  collection: 'events'
});

const Event = mongoose.model('Event', eventSchema);
export default Event;