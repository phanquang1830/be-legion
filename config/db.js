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
        port: process.env.MYSQL_PORT || 3306
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
