const host = 'localhost';
const user = 'root';
const password = 'password';
const database = 'db5';

const Importer = require('mysql-import');
const importer = new Importer({host, user, password, database});
const readline = require("readline");

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