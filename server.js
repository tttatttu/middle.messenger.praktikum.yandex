const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.port || 8080;

const staticPath = path.join(__dirname, 'dist');

app.listen( PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.use(express.static(staticPath));
app.use('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});
