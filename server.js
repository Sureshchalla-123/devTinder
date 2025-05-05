const express = require("express");
const connectDb = require("./src/database/db.js");
const User = require("./src/models/User.js");

const app = express();

app.use(express.json());

app.post("/user/adduser", (req, res) => {
  const data = {
    firstName: "venkatrao",
    lastName: "challa",
    age: 30,
    phone: 12345678,
  };

  try {
    const user = new User(data);
    user.save();
  } catch (e) {
    console.log("Eroor white saving in db");
  }

  res.send("User added");
});

app.get("/users", async () => {
  const data = await User.find({});
  res.send(data);
});

connectDb()
  .then(() => {
    console.log("Database connected sucessfully...");
    app.listen(5000, () => {
      console.log("Server is running at 5000 port");
    });
  })
  .catch(() => {
    console.error("Database connection failed..");
  });
