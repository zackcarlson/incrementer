const router = require('express').Router();
const path = require('path');
const public = '/../client/dist/build/';

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + public + 'index.html'));
});

module.exports = router;