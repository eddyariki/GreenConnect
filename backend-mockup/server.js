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
    origin: "http://192.168.11.13:3000",
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

  res.cookie("x-refresh-token", refreshToken, {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  res.json({
    userId: 1,
    username: req.body.username,
    email: req.body.email,
    accessToken: accessToken,
  });
});
app.post("/users/signup", async (req, res) => {
  console.log("signing up", req.body);
  const accessToken = await signAccessToken(1);
  const refreshToken = await signRefreshToken(1);

  res.cookie("x-refresh-token", refreshToken, {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  res.json({
    userId: 1,
    username: req.body.username,
    email: req.body.email,
    accessToken: accessToken,
  });
});

app.get("/users/user", (req, res) => {
  console.log("user", req.params);
  res.json({
    username: "mockup",
    firstName: "From",
    lastName: "Mockup",
    birthday: "00-00-0000",
    email: "frommockup@mockup.com",
    postalCode: "000-0000",
    country: "Mockup",
    address: "Mockup, Mockup City, Mockup Street, 1-20-2",
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
