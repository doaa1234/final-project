const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/tutorial.routes");
const Importer = require('mysql-import');
const importer = new Importer({host, user, password, database});
const readline = require("readline");
global.__basedir = __dirname + "/..";

class UPLOAD{
    constructor(){

    }
}
class UPLOADCSV extends UPLOAD{

    constructor(){

    app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

let port = 5000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
  
};

 
    
};

class UPLOADSQL extends UPLOAD{
    constructor(){
const host = 'localhost';
const user = 'root';
const password = 'password';
const database = 'db5';



importer.onProgress(progress=>{
  var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is sql file name ? ", function(filename) {
    
        
   


importer.import(`${filename}.sql`).then(()=>{
  var files_imported = importer.getImported();
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err=>{
  console.error(err);
}); });


    }
};

const object=new UPLOAD();
object.UPLOADCSV;
object.UPLOADSQL;




