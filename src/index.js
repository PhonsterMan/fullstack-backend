const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
// allows requests from any url
app.use(cors()); 
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

app.post('/increment', (req, res) => {
  let data = JSON.parse(fs.readFileSync('data.json'));
  data.counter++;
  fs.writeFileSync('data.json', JSON.stringify(data));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
