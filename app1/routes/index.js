var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.use("/loginUrl",function(req,res,next) {
  res.json(7788)
})

module.exports = router;
