const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// allows requests from any url
app.use(cors()); 
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, 'data.json'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
