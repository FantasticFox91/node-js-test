const express = require('express');
const router = express.Router();

const { getVideo } = require('../controllers/video.js')

router.route('/').get(getVideo);

module.exports = router;
