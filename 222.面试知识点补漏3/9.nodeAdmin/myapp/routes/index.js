var express = require('express');
var router = express.Router();
var mysql=require('../mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index');
});
router.post('/login',function(req,res,nect){
  // console.log(req.body);
  var uName=req.body.userName;
  var pwd=req.body.password;
  mysql.query('select * from user where uname=? and pwd=?',[uName,pwd],(err,results)=>{
    if(err){
      throw err;
    }else if(results.length>0){
      res.render("main")
      // res.render("main")
    }else{
      res.end('login failed');
    }
  })
})

module.exports = router;
