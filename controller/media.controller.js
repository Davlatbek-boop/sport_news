const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewMedia = async (req, res) => {
  try {
    const { news_id, media_type, media_url, uploaded_at } = req.body;
    const newMedia = await pool.query(  
      `
            INSERT INTO media(news_id, media_type, media_url, uploaded_at)
            VALUES ($1, $2, $3, $4) RETURNING *
            `,
      [news_id, media_type, media_url, uploaded_at]
    );
    console.log(newMedia.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi media qo'shildi", media: newMedia.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllMedias = async (req, res) => {
  try {
    const newMedia = await pool.query(
      `
        SELECT * FROM media
    `
    );
    res.status(200).send({ message: "Barcha media", media: newMedia.rows  });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getMediaById = async (req, res) => {
  try {
    const id = req.params.id;
    const newMedia = await pool.query(
      `
            SELECT * FROM media WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li media`, language: newMedia.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteMediaById = async (req, res) => {
  try {
    const id = req.params.id;
    const newMedia = await pool.query(
      `
            DELETE FROM media WHERE id = ($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({
        message: `${id} id li media o'chirildi`,
        language: newMedia.rows[0],
      });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewMedia,
  getAllMedias,
  getMediaById,
  deleteMediaById,
};
