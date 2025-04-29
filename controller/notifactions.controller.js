const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");

const addNewNotifactions = async (req, res) => {
  try {
    const { user_id, news_id, msg_type, is_checked, created_at } = req.body;
    const newNotifactions = await pool.query(  
      `
            INSERT INTO notifactions(user_id, news_id, msg_type, is_checked, created_at)
            VALUES ($1, $2, $3, $4, $5) RETURNING *
            `,
      [user_id, news_id, msg_type, is_checked, created_at]
    );
    console.log(newNotifactions.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi notifactions qo'shildi", notifactions: newNotifactions.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllNotifactions = async (req, res) => {
  try {
    const newNotifactions = await pool.query(
      `
        SELECT * FROM notifactions
    `
    );
    res.status(200).send({ message: "Barcha notifactions", notifactions: newNotifactions.rows  });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getNotifactionsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newNotifactions = await pool.query(
      `
            SELECT * FROM notifactions WHERE id=($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({ message: `${id} id li notifactions`, language: newNotifactions.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteNotifactionsById = async (req, res) => {
  try {
    const id = req.params.id;
    const newNotifactions = await pool.query(
      `
            DELETE FROM notifactions WHERE id = ($1)
            `,
      [id]
    );
    res
      .status(200)
      .send({
        message: `${id} id li notifactions o'chirildi`,
        language: newNotifactions.rows[0],
      });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewNotifactions,
  getAllNotifactions,
  getNotifactionsById,
  deleteNotifactionsById,
};
