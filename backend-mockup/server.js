const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const JWT = require("jsonwebtoken");
const cors = require("cors");
const port = 4040;
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://192.168.11.13:3000", "http://localhost:3000"],
    credentials: true,
    allowedHeaders: [
      "content-type",
      "x-access-token",
      "x-refresh-token",
      "accept",
    ],
  })
);
app.use(bodyParser.json());
const user = {
  userId: 0,
  username: "cwilso24",
  email: "t@t.com",
  accessToken: "",
  password: "password",
  firstName: "Connor",
  lastName: "Wilson",
  birthday: "02-18-1999",
  country: "USA",
  postalCode: "11-0201",
  address: "Test Street",
};
const users = [user];
const signAccessToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = "mysecret";
    const options = {
      expiresIn: "60s",
      issuer: " 192.168.11.13",
      audience: toString(userId),
    };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(token);
    });
  });
};

const signRefreshToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = "myrefreshsecret";
    const options = {
      expiresIn: "7d",
      issuer: " 192.168.11.13",
      audience: toString(userId),
    };
    JWT.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(token);
    });
  });
};

app.post("/users/login", async (req, res) => {
  console.log("logging in", req.body);
  const accessToken = await signAccessToken(1);
  const refreshToken = await signRefreshToken(1);
  const data = req.body;
  res.cookie("x-refresh-token", refreshToken, {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  for (let i = 0; i < users.length; i++) {
    const usersdb = users[i];
    if (usersdb.email === data.email && usersdb.password === data.password) {
      return res.json({
        userId: usersdb.userId,
        username: usersdb.username,
        email: usersdb.email,
        accessToken: accessToken,
      });
    }
  }
  return res.json({});
});

app.post("/users/logout", async (req, res) => {
  console.log("logging out", req.body);
  const accessToken = await signAccessToken(1);
  const refreshToken = await signRefreshToken(1);

  res.json({
    status: "ok",
  });
});

app.post("/users/signup", async (req, res) => {
  console.log("signing up", req.body);
  const accessToken = await signAccessToken(1);
  const refreshToken = await signRefreshToken(1);
  const data = req.body;
  res.cookie("x-refresh-token", refreshToken, {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  const user = {
    userId: users.length,
    username: data.username,
    email: data.email,
    accessToken: accessToken,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    birthday: data.birthday,
    country: data.country,
    postalCode: data.postalCode,
    address: data.address,
  };
  users.push(user);
  res.json({
    userId: user.userId,
    username: user.username,
    email: user.email,
    accessToken: user.accessToken,
  });
});

app.get("/users/user", (req, res) => {
  console.log("user", req.params);
  const u = users[users.length - 1];
  res.json({
    username: u.username,
    firstName: u.firstName,
    lastName: u.lastName,
    birthday: u.birthday,
    email: u.email,
    postalCode: u.postalCode,
    country: u.country,
    address: u.address,
  });
});
app.post("/users/ping", (req, res) => {
  console.log("BODY", req.body);
  console.log("HEADERS", req.headers);
  console.log("COOKIES", req.cookies);
  res.json({ msg: "pong" });
});

let server = app.listen(port, function () {
  console.log("server listening on port 4040");
});
