// const express = require('express');
// //const mysql = require('mysql8');
// const bodyParser = require('body-parser');
// const routers=require("./routes/routes")

// const app = express();
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '1022',
//   database: 'todo'
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log('MySQL Connected...');
// });

require('dotenv').config();
const mysql = require('mysql2');

// Create a promise-enabled connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1022',
  database: process.env.DB_NAME || 'todo',
}).promise();

module.exports = db;
