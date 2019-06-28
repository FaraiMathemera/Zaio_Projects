const express = require('express');
const path = require('path');
//init app
const index = express();
//load view engine
index.set('views', path.join(__dirname,'views'));
index.set('view engine', 'pug');
//Home route
index.get('/', function(req, res){
let profiles = [
{
  id:1,
  name:'James',
  surname:'Blunt',
  age:23
},
{
  id:2,
  name:'Jim',
  surname:'Smoke',
  age:28
},
{
  id:3,
  name:'Joe',
  surname:'Dough',
  age:33
}];
res.render('index', {profiles:profiles});
});
//add route
index.get('/profiles/add', function(req, res){
res.render('add_profile', {title:"Add Profile"});
});
//Start server
index.listen(3000, function(){
  console.log('Server started on port 3000');
});
