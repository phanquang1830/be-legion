const paginate = (model) => async (req, res, next) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    try {
        const { count, rows } = await model.findAndCountAll({
            offset,
            limit,
            order: [['created_at', 'DESC']]
        });

        res.paginatedResult = {
            data: rows,
            currentPage: page,
            totalPages: Math.ceil(count / limit),
            totalDocuments: count
        };
        next();
    } catch (error) {
        next(error);
    }
};

export default paginate;