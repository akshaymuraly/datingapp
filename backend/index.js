const express = require("express");
const { app, server } = require("./socket/socket");
const path = require("path");
// const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { mongoDBConnection } = require("./middlewares/mongodobConnection");
const ErrorHandler = require("./middlewares/ErrorHandler");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const PORT = process.env.PORT || 3000;

// ----------ROUTERS---------------------------------------
const messageRouter = require("./modules/user/routes/messageRoutes");
const userRouter = require("./modules/user/routes/userRoutes");
const adminRouter = require("./modules/admin/routes/adminRoutes");
const googleRouter = require("./modules/user/routes/googleAuthRoutes");

// ----------SETTING MIDDLEWARES---------

app.use(cors({ credentials: true, origin: "http://localhost:5173/" }));
app.use(express.json());
app.use(cookieParser());

//-----------DB CONNECTION---------------

mongoDBConnection();

// ----------PASSPORT SETUP--------------

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Use profile information to find or create user in your database
      return done(null, profile);
    }
  )
);

// ----------ROUTES----------------------

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api", googleRouter);
app.use("/api/message", messageRouter);

// ----------ERROR HANDLER---------------

app.use(ErrorHandler);

//-----------LISTENING PORT---------------
server.listen(PORT, () => {
  console.log(`Listening port ${PORT}...`);
});
