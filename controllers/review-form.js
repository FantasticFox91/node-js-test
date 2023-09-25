let { reviews } = require('../data.js');

const getReviews = (req, res) => {
  res.status(200).json({ success: true, data: reviews })
}

const createNewReview = (req, res) => {
  reviews.push(req.body);
  res.status(200).json({ success: true, data: reviews})
}

module.exports = { getReviews, createNewReview };
