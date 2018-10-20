const router = require('express').Router();
const path = require('path');
const public = '/../client/dist/build/';

let recentCount = [0];

// Authentication and Authorization Middleware
const auth = function(req, res, next) {
  console.log('REQ SESSION:', req.session)
  if (req.session && req.session.user === "coolusername" && req.session.admin) {
    return next();
  } else {
    res.redirect('/');
  }
};

router.post('/login', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json(false);    
  } else if(req.body.username === "coolusername" && req.body.password === "solidpassword") {
    req.session.user = "coolusername";
    req.session.admin = true;
    res.json(req.session);
  }
});

// Logout endpoint
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.json("logout success!");
});

// Get home content endpoint
router.get('/home', auth, function (req, res) {
  res.sendFile(path.resolve(__dirname + public + 'index.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + public + 'index.html'));
});

router.get('/get-recent-count', (req, res) => {
  return new Promise((resolve, reject) => {
    resolve(recentCount[0]);
  })
  .then(data => {
    res.status(200).json(data);
  })
});

router.post('/evaluate-next', (req, res) => {
  return new Promise((resolve, reject) => {
    let nextCount = Math.max(1, req.body.currCount * 2);
    resolve(nextCount);
  })
  .then(data => {
    recentCount.pop();
    recentCount.push(data);
    res.status(200).json(data);
  })
  .catch(err => res.status(404).send(err));
});

module.exports = router;