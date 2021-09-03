require("dotenv").config();
const express = require("express");
const expressEjsLayouts = require("express-ejs-layouts");
const http = require("http");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const { db } = require("./config/database");
const { auth_check, verify_check } = require("./app/middleware/authmiddleware");
const { pubgcontroller } = require("./app/controller/pubgcontroller");
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());
app.set("view engine", "ejs");
app.set("layout", path.resolve("./views/layout/layout.ejs"));
app.use(expressEjsLayouts);
app.use(express.static(path.resolve("./assets/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(auth_check);

// database connection
db();

// routes lists
app.get("/", pubgcontroller.index);
app.get("/bc", pubgcontroller.bc);
app.get("/verify", verify_check, pubgcontroller.verify);
app.post("/login", pubgcontroller.login);
app.post("/verify", pubgcontroller.verifying);
app.post("/logout", pubgcontroller.logout);
app.all("*", pubgcontroller.notFound);

server.listen(port, () =>
  console.log(`server started at ${process.env.APP_URL}${port}`)
);
