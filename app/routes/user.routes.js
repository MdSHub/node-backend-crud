const { verifySignUp } = require("../middlewares");
const user = require("../controllers/user.controller");

module.exports = app => {
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    var router = require("express").Router();
  
   
    router.post("/sign-up",[
        verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
      ], user.signup);
    router.post("/sign-in", user.signin);

    app.use('/api/users', router);
};

