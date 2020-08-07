const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("hello express");
});

app.get("/fastcampus", (req, res) => {
  console.log(req);
  res.send("fastcampus get222223333333333");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
