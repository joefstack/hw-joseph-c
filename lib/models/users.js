const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", UserSchema);
