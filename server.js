const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require("express-session");
const passport = require("./passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const MongoStore = require('connect-mongo')(session)
const bodyParser = require('body-parser')

// Connect to the Mongo DB
mongoose.connect(

  process.env.MONGODB_URI || "mongodb://localhost/CrimeDb"
);

// const dbConnection = require('./database')
// const user = require('./routes/api')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use(
//   session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
// );

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

app.use(passport.initialize());
app.use(passport.session()); // calls seralizedUser and deserializedUser

// app.use( (req, res, next) => {
//   console.log('req.session', req.session);
//   return next();
// });
// app.use( (req, res, next) => {
//   console.log("*********************", req.user);
//   if (req.user){
//     res.cookie("auth_user", "test")
//     return next();
//   } else {
//     res.redirect("/")
//   }
// })


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
