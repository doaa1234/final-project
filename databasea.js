var mysql = require('mysql');

class CONNECTION{
  constructor(){
  var conn = mysql.createConnection({
  host: "localhost", //  host name
  user: "root",      //  database username
  password: "password",      //  database password
  database: "db5" // database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
}
};

const connect=new CONNECTION();
connect;

