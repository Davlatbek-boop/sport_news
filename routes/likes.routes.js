const {
  addNewLikes,
  getAllLikess,
  getLikesById,
  deleteLikesById,
} = require("../controller/likes.controller");

const router = require("express").Router();

router.post("/", addNewLikes);
router.get("/", getAllLikess);
router.get("/:id", getLikesById);
router.delete("/:id", deleteLikesById);

module.exports = router;
