const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT;
const host = process.env.HOST;

mongoose
  .connect(process.env.MONGODB_CONNECT_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Running at ${host}:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
