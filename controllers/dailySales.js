const pool = require("../db/pool");

exports.dailySales = (req, res, next) => {
  let query = `SELECT extract(hour from date) as hour ,
                SUM(cast(amount as numeric))
              FROM sales
               GROUP BY extract(hour from date) 
              ORDER BY hour`;

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
