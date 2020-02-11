var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/view', function(req, res, next) {
  var db_user = db.get('user').value();
  console.log("Db_user: ",db_user);
  res.render('./users/view',{user:db_user});
});

router.get('/login',function(req,res,next){
  res.render('./users/login');
});

router.get('/create',function(req,res,next){
  res.render('./users/create');
});

router.post('/sigin_up',function(req,res,next){
  var pass,cfpass;
  pass = req.body.password;
  cfpass = req.body.confirm_password;
  if(pass != cfpass) {
    console.log("no match");
    res.render('./users/create',{error:"Password not macth"});
  } else {
    console.log("no match");
    res.render('./index');
  }
});

router.post('/login',function(req,res,next){
  console.log('login: ',req.body);
});

module.exports = router;
