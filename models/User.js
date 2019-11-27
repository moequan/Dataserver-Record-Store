const mongoose = require("mongoose");
const {
  Schema
} = mongoose;
const Adress = require("./Adress")

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  birthday: {
    type: Date
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  adress: Adress
});



module.exports = mongoose.model("User", UserSchema)
