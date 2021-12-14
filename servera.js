var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./databasea');
var Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
var app = express();



app.get('/export-csv', function (req, res) {
  db.query("SELECT * FROM users", function (err, users, fields) {
    if (err) throw err;
    console.log("users:");

    const jsonUsers = JSON.parse(JSON.stringify(users));
    console.log(jsonUsers);

    // -> Convert JSON to CSV data
    class CONVERRT{
      constructor(){
        this.email='email';
        this.UsersFname='UsersFname';
        this.UsersLname='UsersLname';
      }
    }

    const obj=new CONVERRT();

    const csvFields = [obj.email, obj.UsersFname, obj.UsersLname];
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

// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
class PORT{
  constructor(){
    app.listen(8000, function () {
  console.log('Node app is running on port 8000');
});
  }
}

const port=new PORT();
port;


module.exports = app;
