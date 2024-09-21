// const { createServer } = require('http');//node.js

// const hostname = 'localhost';//localhost
// const port = 6969;//

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n Hoang xin phep tu mo javascript voi hoi dan it');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express'); //commonjs
// import express from 'express   //es modules
const path = require('path'); //commonjs
require('dotenv').config();



const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode . uat . production
const hostname = process.env.HOST_NAME;

//Phải khai báo các template engine trước khi khai báo các route
// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// khai báo route
app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.get('/hoang', (req, res) => {
  res.send('Hello everybody!')
});

app.get('/hocnodejscoban', (req, res) => {
  // res.send('<h1>Học code cơ bản với Hoàng</h1>')
  res.render('sample.ejs')
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});