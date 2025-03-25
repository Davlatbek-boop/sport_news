const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewComments = async (req, res) => {
  try {
    const { user_id, news_id, content, created_at, reply_comment_id, is_approved, is_deleted, views, likes } = req.body;
    const newComments = await pool.query(  
      `
            INSERT INTO comments(user_id, news_id, content, created_at, reply_comment_id, is_approved, is_deleted, views, likes)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
            `,
      [user_id, news_id, content, created_at, reply_comment_id, is_approved, is_deleted, views, likes]
    );
    console.log(newComments.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi comments qo'shildi", comments: newComments.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCommentss = async (req, res) => {
  try {
    const newComments = await pool.query(
      `
        SELECT * FROM comments
    `
    );
    res.status(200).send({ message: "Barcha comments", comments: newComments.rows  });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCommentsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newComments = await pool.query(
      `
            SELECT * FROM comments WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li comments`, language: newComments.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCommentsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newComments = await pool.query(
      `
            DELETE FROM comments WHERE id = ($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({
        message: `${id} id li comments o'chirildi`,
        language: newComments.rows[0],
      });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewComments,
  getAllCommentss,
  getCommentsById,
  deleteCommentsById,
};
