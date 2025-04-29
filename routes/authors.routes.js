const {
  addNewAuthors,
  getAllAuthors,
  getAuthorsById,
  deleteAuthorsById,
} = require("../controller/authors.controller");

const router = require("express").Router();

router.post("/", addNewAuthors);
router.get("/", getAllAuthors);
router.get("/:id", getAuthorsById);
router.delete("/:id", deleteAuthorsById);

module.exports = router;
