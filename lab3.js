//link to the connect package
let connect = require('connect');

// creat a new instance of a connect application
let app = new connect();

// hello function

let index = function(req,res,next){
  res.end('Home / Index');
};


//route the urls to the correct function

app.use('/lab3', index);


//start the server on port 3000
app.listen(3000);
console.log('connect running on port 3000');
