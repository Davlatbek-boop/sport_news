const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewViews = async (req, res) => {
  try {
    const { news_id, user_id, viewed_at } = req.body;
    const newViews = await pool.query(
      `
            INSERT INTO views(news_id, user_id, viewed_at)
            VALUES ($1, $2, $3) RETURNING *
            `,
      [news_id, user_id, viewed_at]
    );
    console.log(newViews.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi views qo'shildi", views: newViews.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllViewss = async (req, res) => {
  try {
    const newViews = await pool.query(
      `
        SELECT * FROM views
    `
    );
    res.status(200).send({ message: "Barcha views", views: newViews.rows });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getViewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newViews = await pool.query(
      `
            SELECT * FROM views WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li views`, language: newViews.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteViewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newViews = await pool.query(
      `
            DELETE FROM views WHERE id = ($1)
            `,
      [id]
    );
    res.status(200).send({
      message: `${id} id li views o'chirildi`,
      language: newViews.rows[0],
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewViews,
  getAllViewss,
  getViewsById,
  deleteViewsById,
};
