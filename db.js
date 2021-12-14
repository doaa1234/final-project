const mysql = require('mysql2/promise');
module.exports = {};

connection()

async function connection() {

  const dbconnection = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"يخشش",
    database:"cruddatabase",
  });

  module.exports.connection = dbconnection;
}