const pool = require("../db/pool");

exports.creatSales = (req, res, next) => {
  let date = new Date();
  let query = `INSERT INTO sales(username,amount,date) VALUES ($1,$2,$3) RETURNING *`;
  const inputs = [req.body.username, req.body.amount, date];

  pool
    .query(query, inputs)
    .then((data) => {
      const datas = data.rows[0];
      res.status(201).json({
        status: "Success",
        data: {
          id: datas.id,
          userName: datas.username,
          amount: datas.amount,
          date: datas.date,
        },
      });
    })
    .catch((err) => {
      res.status(404).json({ status: err, message: `Not Created` });
    });
};
