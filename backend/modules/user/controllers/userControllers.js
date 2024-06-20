const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSignup = AsyncHandler(async (req, res, next) => {
  const { Name, Location, Email, Password } = req.body;
  if (
    !Name ||
    !Location ||
    !Email ||
    !Password ||
    Location === "" ||
    Email === "" ||
    Name === "" ||
    Password === ""
  ) {
    return next(new CustomError("No field can be empty!", 300));
  }
  const duplicateUser = await User.findOne({ Email });
  console.log(duplicateUser);
  if (duplicateUser) {
    return next(new CustomError("Already registered!", 301));
  }
  const salt = await bcrypt.genSalt(16);
  const CryptedPassword = await bcrypt.hash(Password, salt);
  const user = new User({
    Name,
    Email,
    Location,
    Password: CryptedPassword,
  });
  await user.save();
  return res.json({ message: "Record saved!" });
});

const UserLogin = AsyncHandler(async (req, res, next) => {
  const { Password, Email } = req.body;
  if (!Email || !Password || Password === "" || Email === "") {
    next(new CustomError("Allfields are required", 400));
    return;
  }
  const user = await User.findOne({ Email });
  if (!user) {
    next(new CustomError("No account found!", 401));
    return;
  }
  const comparePassword = await bcrypt.compare(Password, user.Password);
  if (!comparePassword) {
    next(new CustomError("Invalid email or password !", 401));
    return;
  }
  const token = await jwt.sign({ id: user._id }, process.env.JWT_TOKEN_KEY, {
    expiresIn: "1d",
  });
  await res.cookie("authtoken", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60), //60 mins
    sameSite: "lax",
    httpOnly: true,
    secure: true,
  });
  return res.json({ message: "Logged in successfully", status: true });
});

const cookieValidation = AsyncHandler(async (req, res, next) => {
  const cookie = req?.headers?.cookie;
  if (!cookie) {
    next(new CustomError("No cookie has found!", 401));
    return;
  }
  const token = cookie.split("authtoken=")[1];
  if (!token) {
    next(new CustomError("No valid token has found!", 401));
    return;
  }
  const { id } = await jwt.verify(token, process.env.JWT_TOKEN_KEY);
  req.id = id;
  // return res.json({ message: "ok" });
  next();
});

module.exports = {
  UserSignup,
  UserLogin,
  cookieValidation,
};
