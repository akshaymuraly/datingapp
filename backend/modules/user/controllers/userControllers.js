const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const { v4: uuid4 } = require("uuid");
const Requests = require("../models/RequestModel");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const UserSignup = AsyncHandler(async (req, res, next) => {
  const {
    Name,
    Location,
    Email,
    Password,
    Gender,
    Address,
    Smocking,
    Interests,
    Hobbies,
  } = req.body;
  // console.log(req.body);
  if (
    !Address ||
    !Smocking ||
    !Name ||
    !Location ||
    !Email ||
    !Password ||
    !Gender ||
    !req.file ||
    req.file === "" ||
    Location === "" ||
    Email === "" ||
    Name === "" ||
    Password === "" ||
    Gender === "" ||
    Smocking === "" ||
    Address === ""
  ) {
    next(new CustomError("No field can be empty!", 300));
    return;
  }
  const duplicateUser = await User.findOne({ Email });
  console.log(duplicateUser);
  if (duplicateUser) {
    return next(new CustomError("Already registered!", 301));
  }
  //File upload block
  const file = req.file;
  const newFileName =
    file.originalname.split(".")[0] +
    uuid4() +
    "." +
    file.originalname.split(".")[1];
  const filepath = path.join(__dirname, "../profile", newFileName); //New file name
  await fs.promises.writeFile(filepath, file.buffer);

  const salt = await bcrypt.genSalt(16);
  const CryptedPassword = await bcrypt.hash(Password, salt);
  const user = new User({
    Name,
    Email,
    Location,
    Password: CryptedPassword,
    Gender,
    Profile: newFileName,
    Interests,
    Hobbies,
    Address,
    Smocking,
  });
  await user.save();
  // console.log("saved user : ", user);
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
  // console.log("cookie:", cookie);
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
  // console.log(req.id);
  // return res.json({ message: "ok" });
  next();
});

const getUserProfile = AsyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    _id: req.id,
  });
  if (!user) {
    next(new CustomError("No user found!", 401));
  }
  const filePath = path.resolve(__dirname, "../profile", user.Profile);
  const file = await fs.promises.readFile(filePath);
  user.Profile = file ? file.toString("base64") : null;
  return res.json({ message: "Details fetched!", user });
});

const matchedProfiles = AsyncHandler(async (req, res, next) => {
  const { gender, age, page, count } = req.query;
  const start = (page - 1) * count;
  const users = await User.find({
    _id: { $ne: req.id },
    Gender: { $ne: gender },
  })
    .skip(start)
    .limit(count);
  if (!users) return next(new CustomError("No matchin profile!", 401));

  const request = await Requests.find({
    $or: [{ senderId: req.id }, { receiverId: req.id }],
  })
    .populate("senderId")
    .populate("receiverId");
  // console.log("users : ", users);

  const usersWithFiles = await Promise.all(
    users.map(async (user) => {
      // console.log("USER : ", user);
      let state = null;
      try {
        for (const item of request) {
          // console.log(
          //   user._id,
          //   ": ",
          //   item?.receiverId._id.toString() === user._id.toString()
          // );
          if (item?.senderId._id.toString() === user._id.toString()) {
            // console.log("tru for id:", user._id);
            state = {
              //to check the particular user has send the request or not
              ...item,
              sender: true,
            };
            break;
          } else if (item?.receiverId._id.toString() === user._id.toString()) {
            // console.log("tru for id:", user._id);
            state = {
              ...item,
              sender: false,
            };
            break;
          }
        }
        const filePath = path.resolve(__dirname, "../profile", user.Profile);
        const file = await fs.promises.readFile(filePath);
        // console.log("File : ", file);
        return {
          ...user.toObject(),
          request_status: state,
          file: file.toString("base64"),
        };
      } catch (err) {
        return {
          ...user.toObject(), //a spread would work but toobject used to convert it again to mongoose object to have save,remove etc mongoose specific methods.
          request_status: state,
          file: null,
        };
      }
    })
  );
  // console.log("USERS : ", usersWithFiles);
  return res.json({ message: "profiles fetched!", users: usersWithFiles });
});

module.exports = {
  UserSignup,
  UserLogin,
  cookieValidation,
  matchedProfiles,
  getUserProfile,
};
