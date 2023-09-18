const express = require('express');
const router = express.Router();

const { getPhotoCards } = require('../controllers/photo-cards.js')

router.route('/').get(getPhotoCards);

module.exports = router;
