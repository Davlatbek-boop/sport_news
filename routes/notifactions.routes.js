const {
  addNewNotifactions,
  getAllNotifactions,
  getNotifactionsById,
  deleteNotifactionsById,
} = require("../controller/notifactions.controller");

const router = require("express").Router();

router.post("/", addNewNotifactions);
router.get("/", getAllNotifactions);
router.get("/:id", getNotifactionsById);
router.delete("/:id", deleteNotifactionsById);

module.exports = router;
