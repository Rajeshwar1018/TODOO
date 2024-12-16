const express = require('express');
const mysql = require('mysql8');
const bodyParser = require('body-parser');
const routers=require("./routes/routes")

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1022',
  database: 'todo'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.use("/api", routers)
const PORT=2818

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports=db

