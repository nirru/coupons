const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/coupon', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'coupons.json'));
});

app.listen(port, () => {
  console.log(`[Flights] API listening on port ${port}.`);
});
