const express = require("express");
const app = express();
const router = require("./router");

app.use(
  express.urlencoded({
    extended: true,
  }),
  express.json(),
  router
);

module.exports = app;
