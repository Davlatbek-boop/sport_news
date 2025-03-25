const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewLikes = async (req, res) => {
  try {
    const { news_id, user_id, liked_at } = req.body;
    const newLikes = await pool.query(  
      `
            INSERT INTO likes(news_id, user_id, liked_at)
            VALUES ($1, $2, $3) RETURNING *
            `,
      [news_id, user_id, liked_at]
    );
    console.log(newLikes.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi likes qo'shildi", likes: newLikes.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllLikess = async (req, res) => {
  try {
    const newLikes = await pool.query(
      `
        SELECT * FROM likes
    `
    );
    res.status(200).send({ message: "Barcha likes", likes: newLikes.rows  });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getLikesById = async (req, res) => {
  try {
    const id = req.params.id;
    const newLikes = await pool.query(
      `
            SELECT * FROM likes WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li likes`, language: newLikes.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteLikesById = async (req, res) => {
  try {
    const id = req.params.id;
    const newLikes = await pool.query(
      `
            DELETE FROM likes WHERE id = ($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({
        message: `${id} id li likes o'chirildi`,
        language: newLikes.rows[0],
      });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewLikes,
  getAllLikess,
  getLikesById,
  deleteLikesById,
};
