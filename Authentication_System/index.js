const express = require('express');

const index = express();

index.get('/', function(req, res){
res.send('Hello World');
});

index.listen(3000, function(){
  console.log('Server started on port 3000');
});
