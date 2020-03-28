var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin',{title: 'HTML',
    arr:['a','b','c']
});
});
router.get('/login', function(req, res, next) {
    res.send('admin under login');
  });

module.exports = router;
