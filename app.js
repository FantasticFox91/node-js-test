const express = require('express');
const cors = require('cors');
const app = express();
const photoCards = require('./routes/photo-cards.js')
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: 'localhost:3000',
  methods: 'GET',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.static('./public'));
app.use(express.json())
app.use(cors());
app.use('/api/v1/cards', photoCards)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
})
