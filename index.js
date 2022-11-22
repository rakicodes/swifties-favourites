const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const connectDB = require("./config/database");
const flash = require("express-flash");
const methodOverride = require("method-override");
const logger = require("morgan");

const mainRoutes = require("./routes/main");
const albumRoutes = require("./routes/albums");
const lyricsRoutes = require("./routes/lyrics");
const songRoutes = require("./routes/songs");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

//Using EJS for views
app.set("view engine", "ejs");

// Setup Sessions - stored in MongoDB
app.use(session({
    secret: 'keyboard cat',
    resave: false, // don't save session if nothing is changed 
    saveUninitialized: false, // don't create a session until something is stored
    store: MongoStore.create({
        mongoUrl: process.env.DB_STRING,
        mongooseConnection: mongoose.connection,
      })
    })
)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/albums", albumRoutes);
app.use("/lyrics", lyricsRoutes);
app.use("/songs", songRoutes);

// error
app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('error/404', { url: req.url, user: req.user });
    return;
  }
}) 

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });