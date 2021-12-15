

const mysqldump=require('mysqldump');
// or const mysqldump = require('mysqldump')
 
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