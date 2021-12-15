const express = require("express");
const router = express.Router();
const csvController = require("../controllers/tutorials/csv.controller");
const upload = require("../middlewares/upload");
class ROUTES{
  constructor(){
    let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/tutorials", csvController.getTutorials);

  app.use("/api/csv", router);
};

module.exports = routes;
  }
};

const obj5=new ROUTES();
obj5;
