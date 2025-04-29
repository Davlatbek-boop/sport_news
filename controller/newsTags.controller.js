const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewNewsTag = async (req, res) => {
  try {
    const { news_id, tag_id } = req.body;
    const newNewsTag = await pool.query(  
      `
            INSERT INTO news_tags(news_id, tag_id)
            VALUES ($1, $2) RETURNING *
            `,
      [news_id, tag_id]
    );
    console.log(newNewsTag.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi newsTag qo'shildi", newsTag: newNewsTag.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllNewsTags = async (req, res) => {
  try {
    const newNewsTag = await pool.query(
      `
        SELECT * FROM news_tags
    `
    );
    res.status(200).send({ message: "Barcha newsTags", newsTags: newNewsTag.rows  });
  } catch (error) {
    console.log(error);
  }
};

const getNewsTagById = async (req, res) => {
  try {
    const id = req.params.id;
    const newNewsTag = await pool.query(
      `
            SELECT * FROM news_tags WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li language`, language: newNewsTag.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

const deleteNewsTagById = async (req, res) => {
  try {
    const id = req.params.id;
    const newNewsTag = await pool.query(
      `
            DELETE FROM news_tags WHERE id = ($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({
        message: `${id} id li newsTag o'chirildi`,
        language: newNewsTag.rows[0],
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addNewNewsTag,
  getAllNewsTags,
  getNewsTagById,
  deleteNewsTagById,
};
