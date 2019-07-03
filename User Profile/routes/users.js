const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
//user model
let User = require('../models/User');

//Login Page
router.get('/login', (req,res) => res.render('login'));

//Register Page
router.get('/register', (req,res) => res.render('register'));

//Dashboard Page
router.get('/dashboard/edit', (req,res) => res.render('dashboard'));

//Register handle
router.post('/register', (req, res) => {
const {name, surname, age, email, password, password2} = req.body;
let errors =[];
//Check required fields
if(!name||!surname||!age||!email||!password||!password2){
  errors.push({msg: 'Please fill in all the fields'});
}
//Check passwords
if (password != password2){
  errors.push({msg: 'Passwords do not match'});
}

//Check password length
if(password.length< 8){
  errors.push({msg: 'Password should be at least 8 characters'});
}

if (errors.length>0){
res.render('register', {
  errors,
  name,
  surname,
  age,
  email,
  password,
  password2
});
}else {
  //Validation passed
  User.findOne({ email: email})
    .then(user => {
      if(user){
        //user exists
        errors.push({msg: 'Email is already registered'});
        res.render('register', {
          errors,
          name,
          surname,
          age,
          email,
          password,
          password2
        });
      } else {
const newUser = new User({
  name,
  surname,
  age,
  email,
  password
});

//hash password
bcrypt.genSalt(10,(err, salt) =>
 bcrypt.hash(newUser.password, salt, (err, hash) => {
   if(err) throw err;
//savepassword hash
   newUser.password = hash;
   newUser.save()
     .then(user =>{
       req.flash('success_msg', 'You are now registered and can log in!!!');
       res.redirect('/users/login');
     })
     .catch(err => console.log(err));

 }))
      }
    });

}
});

//Update handle -----------------------------------------------
router.post('/dashboard/:id',(req, res) =>{
var item = {_id, name, surname, age, email, degree,favCourse} = req.body;
let errors =[];
let query = {_id:req.body._id}
//Check required fields
if(!name||!surname||!age){
  errors.push({msg: 'Please fill in required fields'});
}

if(errors.length > 0){
res.render('dashboard', {
  _id,
  errors,
  name,
  surname,
  age,
  degree,
  favCourse
});
}else {
  //Validation Passed
  //Update user
  User.updateOne(query,{$set:item}, {multi: true},function(err, result){
req.flash('success_msg', 'You have updated your details!!');
res.redirect('/users/dashboard/edit');
console.log(query);
});
}
});
//Udate handle ---------------------------------------------
//Login handle
router.post('/login', (req, res, next) =>{
passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect:  '/users/login',
  failureFlash: true
})(req, res, next);
});

//Logout handle
router.get('/logout', (req, res) => {
req.logout();
req.flash('success_msg', 'You are logged out!!')
res.redirect('/users/login');
});

module.exports=router;
