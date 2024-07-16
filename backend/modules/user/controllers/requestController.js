const User = require("../models/UserModel");
const AsyncHandler = require("../../../middlewares/AsyncHandler");
const { CustomError } = require("../../../middlewares/CustomError");
const Request = require("../models/RequestModel");

const sendRequest = AsyncHandler(async (req, res, next) => {
  const { receiverId } = req.params;
  // const state = accepted ? accepted : rejected ? rejected : pending;
  const request = new Request({
    senderId: req.id,
    receiverId,
    status: "Pending",
  });
  await request.save();
  return res.json({ message: "Request being send!", request });
});

const updateRequest = AsyncHandler(async (req, res, next) => {
  const { Pending, Accepted, Rejected } = req.query;
  // console.log(Pending, Accepted, Rejected);
  const { requestId } = req.params;
  const state = Pending || Accepted || Rejected;
  const request = await Request.findByIdAndUpdate(
    requestId,
    { status: state },
    { new: true }
  );
  if (!request) {
    return next(new CustomError("Unable to update!", 401));
  }
  return res.json({ message: "Status updated", request });
});

module.exports = {
  sendRequest,
  updateRequest,
};
