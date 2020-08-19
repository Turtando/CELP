const router = require("express").Router();
const postRoutes = require("./posts");

const userRoutes = require("./user");

//Routes
router.use("/posts", postRoutes);
router.use("/user", userRoutes);

// const postController = require("../../controllers/postsController.js")
// const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
// const path = require("path");

// const db = require("../../models");
// const { User } = require("../../models");




// For anything else, render the html page
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
//   });

//   router.post(
//     "/signup",
//     function (req, res, next) {
//       console.log("routes/user.js, signup, req.body: ");
//       console.log("**********************************", req.user)
//       postController.createUser(req, res)
//     }
//   )

// router.post(
//   "/login",
//   // function (req, res, next) {
//   //   console.log("routes/user.js, login, req.body: ");
//   //   console.log(req.body)
//   //   next()
//   // },
//   passport.authenticate("local", {successRedirect: "/", failureRedirect: "/login"}
//   // function (username, password,done) {
//   //   db.User.findOne({ username: username}, (err, user) => {
//   //     if (err) {
//   //       return done(err)
//   //     }
//   //     if (!user) {
//   //       return done(null, false, { message: "Incorrect Username"})
//   //     }
//   //     if(!user.checkPassword(password)) {
//   //       return done(null, false, { message: "Incorrect Password"})
//   //     }
//   //     return done(null, user)
//   //   })
//   //   }
//   )
// )

  
module.exports = router;
