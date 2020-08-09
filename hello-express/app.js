const express = require("express");
const nunjucks = require("nunjucks");
const morgan = require("morgan"); // middleware
const bodyParser = require("body-parser"); // middleware express 내장 모듈

const admin = require("./routes/admin");
const contacts = require("./routes/contacts");

const app = express();
const port = 3000;

/**
 * 첫번째 인자 폴더
 * 두번째 인자 객체 옵션
 */
nunjucks.configure("template", {
  autoescape: true, // html 태그를 문자열처럼 출력하게 도와주는 역할
  express: app, // express 객체 app 변수 대입
});

// !! middleware !!

// 미들웨어 셋팅 start
app.use(morgan("dev"));
// 미들웨어 셋팅 end

// bodyParser 설정 start
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   req.body = {};
// });
// bodyParser 설정 end

// 정적 파일
/**
 * 첫번째 인자 url
 * 두번째 인자 폴더명
 */
app.use("/static", express.static("uploads"));

// !! middleware !!

const vipMiddleware = (req, res, next) => {
  console.log("important first middleware");
  next();
};

app.use("/admin", vipMiddleware, admin);
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
