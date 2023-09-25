const express = require('express');
const cors = require('cors');
const app = express();
const photoCards = require('./routes/photo-cards.js')
const reviews = require('./routes/review-form.js')
const video = require('./routes/video.js')
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'https://sedona-nuxt.vercel.app',
  methods: 'GET,POST',
  credentials: true,
}

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors(corsOptions));
app.use('/api/v1/cards', photoCards)
app.use('/api/v1/reviews', reviews)
app.use('/api/v1/video', video)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
})
