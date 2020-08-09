const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
  // res.send("admin 이후 url products");
  res.render("admin/products.html", {
    message: "hello!!!!!!!!!!!!22211",
    online: "express",
  });
});

module.exports = router;
