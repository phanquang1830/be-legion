import asyncHandler from 'express-async-handler';

const paginateWithSearch = (model, searchableField = 'name') => {
  return asyncHandler( async (req, res, next) => {
    const currentPage = Number(req.query.page) || 1; // Trang hiện tại
    const limit = Number(req.query.limit) || 8; // Số mục tối đa mỗi trang
    const keyword = req.query.keyword || ''; // Từ khóa người dùng nhập để tìm kiếm

    const query = {}; // Đối tượng chứa điều kiện truy vấn

    if (keyword) {
      query[searchableField] = {
        $regex: keyword, // Tìm tài liệu có trường searchableField chứa chuỗi keyword
        $options: 'i', // Không phân biệt chữ hoa/chữ thường
      };
    }

      const totalDocuments = await model.countDocuments(query); 
      // Đếm số tài liệu thỏa mãn điều kiện query trong collection

      const data = await model
        .find(query) // Tìm tài liệu theo điều kiện query
        .sort({ createdAt: 'desc' }) // Sắp xếp theo trường createdAt, mới nhất trước
        .limit(limit) // Giới hạn số lượng tài liệu trên mỗi trang
        .skip(limit * (currentPage - 1)); // Bỏ qua các tài liệu thuộc các trang trước

      res.paginatedResult = {
        data,
        currentPage,
        limit,
        totalPages: Math.ceil(totalDocuments / limit), // Tổng số trang
        totalDocuments, // Tổng số tài liệu thỏa mãn điều kiện
      };
      next();

  });
};

export default paginateWithSearch;
