const express = require("express");
const router = express.Router();

const testMiddleware = (req, res, next) => {
  console.log("first middleware");
  next();
};

const testMiddleware2 = (req, res, next) => {
  console.log("second middleware");
  next();
};

const loginRequired = (req, res, next) => {
  if ("로그인이 되어 있으면") {
    res.redirect("로그인 창으로");
  } else {
    next();
  }
};

router.get("/", testMiddleware, testMiddleware2, (req, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
  // res.send("admin 이후 url products");
  res.render("admin/products.html", {
    message: `<h1>태그가 적용 안되며 일반 출력</h1>`,
    online: "express",
  });
});

router.get("/products/write", (req, res) => {
  res.render("admin/write.html", {});
});

router.post("/products/write", (req, res) => {
  res.send(req.body);
});

module.exports = router;
