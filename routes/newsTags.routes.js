const { addNewNewsTag, getAllNewsTags, getNewsTagById, deleteNewsTagById } = require("../controller/newsTags.controller")

const router = require("express").Router()


router.post("/", addNewNewsTag)
router.get("/", getAllNewsTags)
router.get("/:id", getNewsTagById)
router.delete("/:id",deleteNewsTagById)

module.exports = router