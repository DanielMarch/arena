'use strict';

var traceur = require('traceur');
var User = traceur.require(__dirname + '/../models/user.js');

exports.register = (req, res)=>{
  res.render('user/register', {title: 'Arena: Register New User'});
};

exports.validate = (req, res)=>{
  User.create(req.body, user=>{
    if(user){
      res.redirect('/');
    }else{
      res.redirect('/register');
    }
  });
};
