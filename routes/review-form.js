const express = require('express');
const router = express.Router();

const { getReviews, createNewReview } = require('../controllers/review-form.js')

router.route('/').get(getReviews).post(createNewReview);

module.exports = router;
