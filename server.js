const express = require("express");
const connectDb = require("./src/database/db.js");
const User = require("./src/models/User.js");

const app = express();

app.use(express.json());

app.post("/user/adduser", (req, res) => {
  try {
    const data = req.body;

    const user = new User(data);
    user.save();
  } catch (e) {
    console.log("Error while adding user");
  }

  res.send("User added");
});

app.get("/users", async (req, res) => {
  try {
    const data = await User.find({});
    res.send(data);
  } catch (error) {
    console.log("Error while fetching the users");
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await User.findByIdAndUpdate(id, data, {
      returnDocument: "after",
    });

    if (!user) {
      res.send("User not found");
    }

    user.save();
    res.send("User updated");
  } catch (error) {
    res.send("Error while updating the user");
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.send("User deleted sucessfully");
  } catch (error) {
    res.status(500).send("Error while deleting user");
  }
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
