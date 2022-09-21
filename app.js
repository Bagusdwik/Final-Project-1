const express = require("express");
const app = express();
require("dotenv").config();
const pool = require("./connection/connection-setup");
const userRoute = require("./routes/user-route");

//parser middleware from JSON

app.use(express.json());

app.use("/api/v1/users", userRoute);

app.listen(process.env.PORT, () => {
  if (!(process.env.NODE_ENV === "production")) {
    console.log("server is listening to port " + process.env.PORT);
  }
});
