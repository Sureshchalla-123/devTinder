const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.send("users get api");
});

app.post("/users", (req, res) => {
  res.send("post reques of users");
});

app.put("/users", (req, res) => {
  res.send("user updated");
});

app.delete("/users", (req, res) => {
  res.send("user deleted ");
});

app.listen(5000, () => {
  console.log("Server is running at 5000 port");
});
