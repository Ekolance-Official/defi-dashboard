var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dotenv = require("dotenv");
var helmet = require("helmet");
const compression = require("compression");
var cors = require("cors");

var app = express();
dotenv.config({ path: "./.env" });

app.use(
  helmet({ crossOriginEmbedderPolicy: false, contentSecurityPolicy: false })
);
app.use(cors());
app.use(compression());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname + "/client/dist")));
app.use("*", express.static(path.join(__dirname + "/client/dist")));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

module.exports = app;
