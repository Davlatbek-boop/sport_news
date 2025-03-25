const {
  addNewViews,
  getAllViewss,
  getViewsById,
  deleteViewsById,
} = require("../controller/views.controller");

const router = require("express").Router();

router.post("/", addNewViews);
router.get("/", getAllViewss);
router.get("/:id", getViewsById);
router.delete("/:id", deleteViewsById);

module.exports = router;
