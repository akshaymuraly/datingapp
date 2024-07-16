const {
  sendRequest,
  updateRequest,
} = require("../controllers/requestController");
const { cookieValidation } = require("../controllers/userControllers");

const Router = require("express").Router();

Router.post("/send/:receiverId", cookieValidation, sendRequest);
Router.put("/:requestId/params", cookieValidation, updateRequest);

module.exports = Router;
