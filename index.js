
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require("./db")
const cors = require('cors')
app.use(bodyParser.json())
var Json2csvParser = require('json2csv').Parser;
var path = require('path');
const fs = require('fs');
//app.use(express.json)


var corsOptions = {

    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }
  
  app.use(cors(corsOptions))

app.listen(3500, () => {
  console.log('Server started!')
})

app.get('/hi', async (req, res) => {

    res.status(200).json("hi")
})

/*_____________________________________________**/
app.get("/add/movie", async (req,res) => {


    const sqlInsert = "INSERT INTO movie_reviewscol (moviename,movieReview) VALUES ('inception','good_movie');";
    await db.connection.execute(sqlInsert)
    res.status(200).json("add done")
    
});

app.post('/add/user',  (req, res) => {

  /* const email=req.body.email;
    const type=req.body.type;
    const password=req.body.password;
    db.query(
        "INSERT INTO user (`email`, `type`, `password`) VALUES (?, ?, ?);",
        [email,type,password],
        (err, result)=>{
            console.log(err);
        }
    );
    */
    

    let sql = "INSERT INTO user (`email`, `type`, `password`) VALUES (?, ?, ?);";
    db.connection.execute(sql, [req.body.email, req.body.type, req.body.password])
    res.status(200).json("user added")
})
app.post('/add/database',  (req, res) => {

    /* const email=req.body.email;
      const type=req.body.type;
      const password=req.body.password;
      db.query(
          "INSERT INTO user (`email`, `type`, `password`) VALUES (?, ?, ?);",
          [email,type,password],
          (err, result)=>{
              console.log(err);
          }
      );
      */
      
  
      let sql = "INSERT INTO database (`lacalhost`, `root`, `password`, `name`) VALUES (?, ?, ?, ?);";
      db.connection.execute(sql, [req.body.lacalhost, req.body.root, req.body.password, req.body.name])
      res.status(200).json("database added")
  })

app.post("/signin",(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    db.sql(
    "SELECT * FROM user  WHERE email = ? AND password = ?",
    [email,password],
    )

})

app.get("/login", async (req,res) => {


    const sqlInsert = "SELECT * FROM user;";
    let result = await db.connection.execute(sqlInsert)

    res.status(200).json(result[0])
    
});
//app.get()

app.get("/export-csv", function (req, res) {
    db.query("SELECT * FROM user", function (err, user, fields) {
      if (err) throw err;
      console.log("user:");
  
      const jsonUsers = JSON.parse(JSON.stringify(user));
      console.log(jsonUsers);
  
      // -> Convert JSON to CSV data
      const csvFields = ['id', 'email', 'type', 'password'];
      const json2csvParser = new Json2csvParser({ csvFields });
      const csv = json2csvParser.parse(jsonUsers);
  
      console.log(csv);
  
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=users.csv");
  
      res.status(200).end(csv);
      // -> Check 'users.csv' file in root project folder
    });

    



  });app.listen(8000, function () {
        console.log('Node app is running on port 8000');
      });
      module.exports = app;
