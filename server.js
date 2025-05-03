const express = require("express");

const app = express();

app.use(express.json());

const middleware = (req, res, next) => {
  const token = "1234567890";
  const reqToken = "1234567890";
  if (token === reqToken) {
    console.log("authentication executed!!!");
    next();
  } else {
    res.send("Not authenticated");
  }
};

app.use("/auth", middleware);

app.get("/auth/posts", (req, res) => {
  res.send("fetched all posts");
});

app.post("/user/signup", (req, res) => {
  res.send("user added ");
});

app.post("/user/login", middleware, (req, res) => {
  res.send("user loggedin");
});

app.listen(5000, () => {
  console.log("Server is running at 5000 port");
});
