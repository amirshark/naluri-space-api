// server.js
const express = require('express');
const cors = require('cors');
const {
  startCalculating,
  stopCalculating,
  reset,
  getCurrentPi
} = require('./piCalculator');

const app = express();
const PORT = 3000;


app.use(cors({
  origin: '*',
}));


app.get('/pi', (req, res) => {
  res.json(getCurrentPi());
});

app.post('/start', (req, res) => {
  startCalculating();
  res.json({ message: 'Calculation started' });
});

app.post('/pause', (req, res) => {
  stopCalculating();
  res.json({ message: 'Calculation paused' });
});

app.post('/reset', (req, res) => {
  reset();
  res.json({ message: 'Calculation reset' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});