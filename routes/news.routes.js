const { addNewNew, getAllNews, getNewById, deleteNewById } = require("../controller/news.controller")

const router = require("express").Router()


router.post("/", addNewNew)
router.get("/", getAllNews)
router.get("/:id", getNewById)
router.delete("/:id",deleteNewById)

module.exports = router