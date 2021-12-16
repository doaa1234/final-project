

const mysqldump=require('mysqldump');
// or const mysqldump = require('mysqldump')
 class SNAPSHOT{
     constructor(){
         // dump the result straight to a file
mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'db5',
    },

    dumpToFile: './snapshot.sql',
});
     }
 };

 const object=new SNAPSHOT();
 object;
