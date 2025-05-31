import asyncHandler from "express-async-handler"
import { Op } from "sequelize" // 💡 Sequelize Operators (Op.like)

const paginateWithSearch = (model, searchableField = "name") => {
  return asyncHandler(async (req, res, next) => {
    const currentPage = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 8
    const keyword = req.query.keyword || ""

    const offset = limit * (currentPage - 1)

    // Tạo điều kiện truy vấn giống với MongoDB `$regex` bằng Sequelize `Op.like`
    const whereClause = keyword
      ? {
          [searchableField]: {
            [Op.like]: `%${keyword}%`, // Sequelize thay thế cho $regex + $options: 'i'
          },
        }
      : {}

    // Sequelize thay thế cho:
    // const totalDocuments = await model.countDocuments(query);
    // const data = await model.find(query).sort(...).limit(...).skip(...)
    const { count: totalDocuments, rows: data } = await model.findAndCountAll({
      where: whereClause,
      order: [["created_at", "DESC"]], // thay cho `.sort({ createdAt: 'desc' })`
      limit,                           // giống `.limit(limit)`
      offset,                          // giống `.skip(limit * (currentPage - 1))`
    })

    res.paginatedResult = {
      data,
      currentPage,
      limit,
      totalPages: Math.ceil(totalDocuments / limit),
      totalDocuments,
    }

    next()
  })
}

export default paginateWithSearch
