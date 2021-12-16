var mysql = require('mysql');
var log = require('./logger');
var singeltonInstance=new log.Singleton;
var loggerInstance=new log.Logger;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "db5"});


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout});
  

  rl.question("What is table name you want to insert  ? ", function(tablename) {
    rl.question("What is first value  you want to add ? ", function(emailval) { 
        rl.question("What is second value  you want to add ? ", function(fname) { 
            rl.question("What is the third value  you want to add ? ", function(lname) { 

con.connect(function(err) {
  if (err) {loggerInstance.logerror("connection does not success");};
  

  console.log("Connected!");
  loggerInstance.loginfo("connected succefuly");

  var sql = `INSERT INTO ${tablename} (email, Usersfname,Userslname) VALUES ('${emailval}', '${fname}','${lname}')`;
  con.query(sql, function (err, result) {if (err){loggerInstance.logerror("record does not insert");} 
    
  console.log("1 record inserted");
  loggerInstance.loginfo("recode inserted successfuly");});});});});});});

  
