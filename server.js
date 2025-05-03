const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Home route");
});

app.use("/test", (req, res) => {
  res.send("Test route");
});

app.use("/hello", (req, res) => {
  res.send("Hello route");
});

app.listen(5000, () => {
  console.log("Server is running at 5000 port");
});
