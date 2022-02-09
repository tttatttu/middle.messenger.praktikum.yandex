const express = require('express');
const path = require('path');
const router = express.Router()
const app = express();
const PORT = 3000;

const staticPath = path.join(__dirname, 'dist');

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.use(express.static(staticPath));

app.get('./', (req, res) => {
  res.sendFile( staticPath,'index.hbs');
});

router.get('./authorization', (req, res) => {
  res.sendFile(staticPath, 'authorization.hbs');
});

router.get('/chat', (req, res) => {
  res.sendFile(path.join(staticPath, 'chat.hbs'));
});

router.get('/profile', (req, res) => {
  res.sendFile(path.join(staticPath, 'profile.hbs'));
});

router.get('/404', (req, res) => {
  res.sendFile(path.join(staticPath, '404.hbs'));
});


router.get('/500', function (req, res) {
  res.sendFile(path.join(staticPath, '500.hbs'));
})

module.exports = router;
