const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

var bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql123",
  database: "simple_react_mysql_db"
});

app.use(cors());

app.listen(PORT, (req, res) => {
  console.log(`App is running at port ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json" }));

// app.post("/collect", (req, res) => {
//   const insertQuery = "select * from donaters where bloodgroup=?";
//   connection.query(insertQuery, req.body.bloodgroup, (err, result) => {
//     res.json(result);
//     if (err) console.log(err);
//   });
// });

app.delete("/delete/:id", (req, res) => {
  connection.query(
    "DELETE from donater where id = ?",
    [req.params.id],
    (err, result) => {
      res.json(result);
      if (err) console.log(err);
    }
  );
});

app.get("/", (req, res) => {
  const insertQuery = "select * from donater";

  connection.query(insertQuery, (err, result) => {
    res.json(result);
    if (err) console.log(err);
  });
});

app.put("/update", (req, res) => {
  const insertQuery =
    "Update donater set name= ?, email = ?, age = ?, phonenumber = ?, bloodgroup = ?, address = ? where id = ?";
  const insertValues = [
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.phonenumber,
    req.body.bloodgroup,
    req.body.address,
    req.body.id
  ];
  connection.query(insertQuery, insertValues, (err, result) => {
    res.json(result);
    if (err) console.log(err);
  });
});

app.post("/donate", (req, res) => {
  const insertQuery =
    "insert into donater(id, name, email, age, phonenumber, bloodgroup, address) values(?, ?, ?, ?, ?, ?, ?)";
  const insertValues = [
    req.body.id,
    req.body.name,
    req.body.email,
    req.body.age,
    req.body.phonenumber,
    req.body.bloodgroup,
    req.body.address
  ];
  connection.query(insertQuery, insertValues, (err, result) => {
    res.json(result);
    if (err) console.log(err);
  });
});
