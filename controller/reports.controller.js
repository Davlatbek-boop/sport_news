const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewReports = async (req, res) => {
  try {
    const { user_id, news_id, reason, status, created_at } = req.body;
    const newReports = await pool.query(  
      `
            INSERT INTO reports(user_id, news_id, reason, status, created_at)
            VALUES ($1, $2, $3, $4, $5) RETURNING *
            `,
      [user_id, news_id, reason, status, created_at]
    );
    console.log(newReports.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi reports qo'shildi", reports: newReports.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllReportss = async (req, res) => {
  try {
    const newReports = await pool.query(
      `
        SELECT * FROM reports
    `
    );
    res.status(200).send({ message: "Barcha reports", reports: newReports.rows  });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getReportsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newReports = await pool.query(
      `
            SELECT * FROM reports WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li reports`, language: newReports.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteReportsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newReports = await pool.query(
      `
            DELETE FROM reports WHERE id = ($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({
        message: `${id} id li reports o'chirildi`,
        language: newReports.rows[0],
      });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewReports,
  getAllReportss,
  getReportsById,
  deleteReportsById,
};
