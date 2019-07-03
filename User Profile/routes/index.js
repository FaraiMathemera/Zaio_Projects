const express = require('express');
const router = express.Router();
const { ensureAuthenticated} = require('../config/auth');
//Welcome Page
router.get('/', (req,res) => res.render('welcome'));
router.get('/dashboard', ensureAuthenticated, (req,res) => res.render('dashboard',
{_id: req.user._id, name: req.user.name, surname: req.user.surname, email: req.user.email, age: req.user.age, degree: req.user.degree, favCourse: req.user.favCourse}));
module.exports=router;
