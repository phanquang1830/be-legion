import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'; // Sửa lại dòng này

const Event = sequelize.define('Event', {
  event_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
    comment: 'ID duy nhất của Event, tự động tăng'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'Tên Event'
  },
  slug: DataTypes.STRING,
  host: DataTypes.STRING,
  community_member_id: DataTypes.STRING,
  in_person_location: DataTypes.STRING,
  starts_at: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: 'Thời gian Event bắt đầu'
  },
  ends_at: {
    type: DataTypes.DATE,
    allowNull: false,
    comment: 'Thời gian Event kết thúc'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    comment: 'Thời gian tạo Event'
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    comment: 'Thời gian cập nhật Event gần nhất'
  },
  url: DataTypes.STRING,
  cover_image_url: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  max_attendees: DataTypes.INTEGER,
  current_attendees: DataTypes.INTEGER,
  status: DataTypes.STRING,
  category: DataTypes.STRING,
  location_URL: DataTypes.STRING
}, {
  tableName: 'events',
  timestamps: false
});

export default Event;