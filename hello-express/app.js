const express = require("express");
const nunjucks = require("nunjucks");
const admin = require("./routes/admin");
const contacts = require("./routes/contacts");

const app = express();
const port = 3000;

/**
 * 첫번째 인자 폴더
 * 두번째 인자 객체 옵션
 */
nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

app.use("/admin", admin);
app.use("/contacts", contacts);

app.get("/", (req, res) => {
  res.send("hello express13212313321321");
});

app.get("/fastcampus", (req, res) => {
  res.send("fastcampus get222223333333333");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
