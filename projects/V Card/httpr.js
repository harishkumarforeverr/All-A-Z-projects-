const { json } = require('body-parser');
var express = require('express');
var fs = require('fs');
var app = express();
app.get("/", (req, res) => {
  fs.readFile('./mahesh goud.vcf', 'utf-8', (err, data) => {
    if (err) {
      console.log('runtime error ', err);
    } else {
      // emo i dont but these are the header i copied from google (3)
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
      res.send(data);
      res.end(); 
    }
  });
}).listen(9000);
console.log("server started at 9000");