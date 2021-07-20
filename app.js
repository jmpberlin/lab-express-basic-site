const express = require ('express');
const app = express();

app.use(express.static('public'))

// HOME ROUTE
app.get('/home', (request, response, next) => {


    response.sendFile(__dirname + '/views/index.html');
  
  });


  // ABOUT ROUTE
app.get('/about', (request, response, next) => {


    response.sendFile(__dirname + '/views/about.html');
  
  });


  // WORKS ROUTE
app.get('/works', (request, response, next) => {


    response.sendFile(__dirname + '/views/works.html');
  
  });


app.listen(3000, () => console.log('My first app listening on port 3000! '));
