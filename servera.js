var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./databasea');
var Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
const { Interface } = require('readline');
var app = express();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What is sql file name ? ", function(filename) {

app.get('/export-csv', function (req, res) {
  db.query(`SELECT * FROM ${filename}`, function (err, users, fields) {
    if (err) throw err;
    console.log("users:");

    const jsonUsers = JSON.parse(JSON.stringify(users));
    console.log(jsonUsers);

    // -> Convert JSON to CSV data
    


    

    class BUILDER{
      constructor(){

        
      }


      setEmail(){
        this.email='email';
      }


      setUsersFname(){
        this.UsersFname='UsersFname';
      }

      setUsersLname(){
        this.UsersLname='UsersLname';
      }

      

    }


    const obj1=new BUILDER();




    const csvFields = [obj1.setEmail(), obj1.setUsersFname(),obj1.setUsersLname() ];
    const json2csvParser = new Json2csvParser({ csvFields });
    const csv = json2csvParser.parse(jsonUsers);

    console.log(csv);


    class RESULTS{
      constructor(){
        res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=users.csv");
      }
    }

    const objResult=new RESULTS();
    objResult;

    res.status(200).end(csv);
    // -> Check 'users.csv' file in root project folder
  });
});

class PORT{
  constructor(){
    app.listen(8000, function () {
  console.log('Node app is running on port 8000');
});
  }
}

const port=new PORT();
port;


module.exports = app;});
