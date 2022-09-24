const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const { findOneAndDelete } = require("./models/user");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://somesh:123@cluster0.qqnauyp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => console.log("conncted with DB"))
  .catch((err) => console.log("err"));

app.get("/all-user", async (req, res) => {
  const users = await User.find();
  return res.json(users);
});

app.post("/user", async (req, res) => {
  try {
    const userData = await new User(req.body);
    const user = await userData.save();
    return res.json(user);
  } catch (error) {
    return res.json({ error: "please enter details" });
  }
});

app.listen(3000);
