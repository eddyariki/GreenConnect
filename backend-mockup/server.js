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
    console.log(usersdb, data);
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
  return res.json({
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
const teams = [
  {
    teamId: 0,
    teamName: "Lakers",
  },
  {
    teamId: 1,
    teamName: "Warriors",
  },
  {
    teamId: 2,
    teamName: "Bulls",
  },
  {
    teamId: 3,
    teamName: "Hornets",
  },
  {
    teamId: 4,
    teamName: "Raptors",
  },
];
const bets = [
  {
    betId: 0,
    game: {
      teamA: teams[0],
      teamB: teams[1],
      score: [210, 100],
    },
    bet: {
      winner: "teamA",
      spread: 4.5,
      ou: "over",
    },
  },
  {
    betId: 1,
    game: {
      teamA: teams[1],
      teamB: teams[2],
      score: [180, 90],
    },
    bet: {
      winner: "teamB",
      spread: 4,
      ou: "under",
    },
  },
  {
    betId: 2,
    game: {
      teamA: teams[2],
      teamB: teams[0],
      score: [190, 120],
    },
    bet: {
      winner: "teamA",
      spread: 3.2,
      ou: "over",
    },
  },
  {
    betId: 3,
    game: {
      teamA: teams[2],
      teamB: teams[3],
      score: [124, 120],
    },
    bet: {
      winner: "teamB",
      spread: 2.5,
      ou: "under",
    },
  },
  {
    betId: 4,
    game: {
      teamA: teams[4],
      teamB: teams[0],
      score: [220, 290],
    },
    bet: {
      winner: "teamA",
      spread: 4,
      ou: "over",
    },
  },
  {
    betId: 5,
    game: {
      teamA: teams[2],
      teamB: teams[4],
      score: [110, 80],
    },
    bet: {
      winner: "teamB",
      spread: 1.2,
      ou: "over",
    },
  },
  {
    betId: 6,
    game: {
      teamA: teams[3],
      teamB: teams[1],
      score: [90, 50],
    },
    bet: {
      winner: "teamA",
      spread: 1,
      ou: "under",
    },
  },
  {
    betId: 7,
    game: {
      teamA: teams[2],
      teamB: teams[4],
      score: [130, 140],
    },
    bet: {
      winner: "teamB",
      spread: 3.3,
      ou: "over",
    },
  },
];

app.get("/api/bets", (req, res) => {
  console.log("GET bets");
  return res.json({
    bets: bets,
  });
});
const modelers = [
  {
    name: "Modeler A",
    acc: 10.2,
    users: 233,
    fees: 1.22,
    age: 333,
    userId: 0,
  },
  {
    name: "Modeler B",
    acc: 50.5,
    users: 2133,
    fees: 1.22,
    age: 343,
    userId: 1,
  },
  {
    name: "Modeler C",
    acc: 66.63,
    users: 1233,
    fees: 8.2,
    age: 223,
    userId: 2,
  },
  {
    name: "Modeler D",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 3,
  },
  {
    name: "Modeler E",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 4,
  },
  {
    name: "Modeler F",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 5,
  },
  {
    name: "Modeler G",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 6,
  },
  {
    name: "Modeler H",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 7,
  },
  {
    name: "Modeler I",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 8,
  },
  {
    name: "Modeler J",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 9,
  },
  {
    name: "Modeler K",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 10,
  },
  {
    name: "Modeler L",
    acc: 78.0,
    users: 2233,
    fees: 1.02,
    age: 33,
    userId: 11,
  },
];

app.get("/api/modelers", (req, res) => {
  console.log("GET modelers");
  return res.json({
    modelers: modelers,
  });
});

let server = app.listen(port, function () {
  console.log("server listening on port 4040");
});
