import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,    // Tên database
    process.env.MYSQL_USER,        // User
    process.env.MYSQL_PASSWORD,    // Password
    {
        host: process.env.MYSQL_HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
        port: process.env.MYSQL_PORT || 3306,
        pool: {
            max: Number(process.env.MYSQL_POOL_MAX) || 10,// Số kết nối tối đa trong pool
            min: Number(process.env.MYSQL_POOL_MIN) || 0,// Số kết nối tối thiểu trong pool
            acquire: Number(process.env.MYSQL_POOL_ACQUIRE) || 30000,// Thời gian tối đa để kết nối được lấy từ pool (ms)
            idle: Number(process.env.MYSQL_POOL_IDLE) || 10000// Thời gian tối đa để kết nối không hoạt động trước khi bị giải phóng (ms)
        }
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connected successfully');
    } catch (error) {
        console.error('MySQL connection error:', error);
        process.exit(1);
    }
};

export { sequelize };
export default connectDB;
