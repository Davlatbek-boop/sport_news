const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewAuthors = async (req, res) => {
  try {
    const { user_id, is_approved, is_editor } = req.body;
    const newAuthors = await pool.query(  
      `
            INSERT INTO authors(user_id, is_approved, is_editor)
            VALUES ($1, $2, $3) RETURNING *
            `,
      [user_id, is_approved, is_editor]
    );
    console.log(newAuthors.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi authors qo'shildi", authors: newAuthors.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllAuthors = async (req, res) => {
  try {
    const newAuthors = await pool.query(
      `
        SELECT * FROM authors
    `
    );
    res.status(200).send({ message: "Barcha authors", authors: newAuthors.rows  });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAuthorsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newAuthors = await pool.query(
      `
            SELECT * FROM authors WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li authors`, language: newAuthors.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteAuthorsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newAuthors = await pool.query(
      `
            DELETE FROM authors WHERE id = ($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({
        message: `${id} id li authors o'chirildi`,
        language: newAuthors.rows[0],
      });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewAuthors,
  getAllAuthors,
  getAuthorsById,
  deleteAuthorsById,
};
