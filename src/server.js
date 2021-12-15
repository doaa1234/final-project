const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/tutorial.routes");

global.__basedir = __dirname + "/..";

class SERVER{
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
  }
};

const obj6=new SERVER();
obj6;
