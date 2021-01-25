const express = require("express");
const createsales = require("../controllers/createSales");
const dailysales = require("../controllers/dailySales");
const weeksales = require("../controllers/weekSales");
const monthsales = require("../controllers/monthsales");

const route = express.Router();

//GRT ROUTE
route.get("/daily", dailysales.dailySales);
route.get("/weekly", weeksales.weekSales);
route.get("/monthly", monthsales.monthmonth);

//POST ROUTE
route.post("/addSales", createsales.creatSales);

module.exports = route;
