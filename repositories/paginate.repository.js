import { Op } from 'sequelize'

export const paginateWithSearch = async ({
  model,
  page = 1,
  limit = 8,
  keyword = '',
  searchableField = 'name',
  order = [['created_at', 'DESC']]
}) => {
  const offset = limit * (page - 1)

  const whereClause = keyword
    ? {
        [searchableField]: {
          [Op.like]: `%${keyword}%`
        }
      }
    : {}

  const { count: totalDocuments, rows: data } = await model.findAndCountAll({
    where: whereClause,
    order,
    limit,
    offset
  })

  return {
    data,
    currentPage: page,
    limit,
    totalPages: Math.ceil(totalDocuments / limit),
    totalDocuments
  }
}
