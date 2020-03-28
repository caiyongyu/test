var express = require('express');
var router = express.Router();
var mysql=require('../mysql');

/* GET users listing. */
router.post('/', function(req, res, next) {
    var data=req.body;
    var cName=data.name;
    if(cName){
        mysql.query('insert into cuisineNTable(cuisineName) value(?)',[cName],(err,results)=>{
            if(err) throw err;
            else{
                res.send("添加菜系成功");
            }
        })
    }else{
        res.send("添加菜系不能为空！");
    }
  
});

module.exports = router;
