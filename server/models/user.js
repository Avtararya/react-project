const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const userModel = new Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid email");
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userModel);
module.exports = User;
