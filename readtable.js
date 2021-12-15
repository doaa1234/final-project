var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db5"
});
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("What is table name you want to show ? ", function(tablename) {
con.connect(function(err) {
  if (err) throw err;
  con.query(`SELECT * FROM ${tablename}`, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});});