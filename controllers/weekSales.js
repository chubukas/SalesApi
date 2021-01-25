const pool = require("../db/pool");

exports.weekSales = (req, res, next) => {
  let query = `SELECT extract(day from date) as day ,
                SUM(cast(amount as numeric))
              FROM sales
               GROUP BY extract(day from date)
              ORDER BY day`;

  pool
    .query(query)
    .then((datas) => {
      res.status(400).json({
        status: "Success",
        data: datas.rows,
      });
    })
    .catch((err) => {
      res.status(404).json({ status: err, message: `Error` });
    });
};
