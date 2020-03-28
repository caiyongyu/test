var express = require('express');
var router = express.Router();
var mysql=require('../mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.query('select * from cuisineNTable',(err,results)=>{
    if(err) throw err;
    else{
      res.render("cuisineList",{cObj:results});     //对象数组？？
    }
  })
  
});

module.exports = router;
