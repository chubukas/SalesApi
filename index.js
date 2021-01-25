const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const salesRouter = require("./routes/salesRoutes");

const dbConnect = require("./db/dbConnect");

dbConnect();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ info: "Welcome To Sales Site" });
});

app.use("/", salesRouter);

app.listen(port, () => {
  console.log("App is running");
});
