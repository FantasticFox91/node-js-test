let { photoCards } = require('../data.js');

const getPhotoCards = (req, res) => {
  res.status(200).json({ success: true, data: photoCards })
}

module.exports = { getPhotoCards };
