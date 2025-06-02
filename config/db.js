import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.DB_LOGGING === 'true' ? console.log : false, //Bật tắt log của Sequelize

    // Cấu hình mặc định cho các model
    define: {
      freezeTableName: true, // Không tự đổi tên table thành số nhiều (user => users)
      timestamps: false // Tắt tự động tạo 2 trường createAt & updateAt 
    },

    pool: {
      max: parseInt(process.env.DB_POOL_MAX) || 10, // Số kết nối tối đa
      min: parseInt(process.env.DB_POOL_MIN) || 0, // Số kết nối tối thiểu
      acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000, // Thời gian tối đa (ms) để sequelize cố gắng 
                                                                // lấy 1 kết nối trước khi báo lỗi
      idle: parseInt(process.env.DB_POOL_IDLE) || 10000 // Thời gian tối đa một kết nối rảnh hoạt động trước khi bị đóng (ms)
    }
  }
)

sequelize
  .authenticate()
  .then(() =>{
    console.log('Database connected')
  })
  .catch(err =>{
    console.log('Error to connect Database', err)
  })

export default sequelize