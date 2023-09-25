let { video } = require('../data.js');

const getVideo = (req, res) => {
  res.status(200).json({ success: true, data: video })
}

module.exports = { getVideo };
