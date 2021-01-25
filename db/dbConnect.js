const pool = require("./pool");
const table = require("./table");

const dbConnect = () => {
  pool.on("connect", () => {
    console.log("connected to database");
  });

  pool
    .query(table.salesTable)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = dbConnect;
