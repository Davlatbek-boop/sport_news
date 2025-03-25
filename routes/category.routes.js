const { addNewCategory, getAllCategorys, getCategoryById, deleteCategoryById } = require("../controller/category.controller")

const router = require("express").Router()


router.post("/", addNewCategory)
router.get("/", getAllCategorys)
router.get("/:id", getCategoryById)
router.delete("/:id",deleteCategoryById)

module.exports = router