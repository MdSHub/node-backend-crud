const { authJwt } = require("../middlewares");

module.exports = app => {
    const task = require("../controllers/task.controller.js");
  
    var router = require("express").Router();
    
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
   
    router.post("/",
    [authJwt.verifyToken, authJwt.isModerator], task.create);
    router.get("/", 
    [authJwt.verifyToken, authJwt.isModerator],task.findAll);
    router.get("/:id",
    [authJwt.verifyToken, authJwt.isModerator], task.findOne);
    router.put("/:id",
    [authJwt.verifyToken, authJwt.isModerator], task.update);
    router.delete("/:id",
    [authJwt.verifyToken, authJwt.isModerator], task.delete);
  
    app.use('/api/tasks', router);
  };