const { addNewNews_with_lang, getAllNews_with_langs, getNews_with_langById, deleteNews_with_langById } = require("../controller/newsWithLangs.controller")

const router = require("express").Router()


router.post("/", addNewNews_with_lang)
router.get("/", getAllNews_with_langs)
router.get("/:id", getNews_with_langById)
router.delete("/:id",deleteNews_with_langById)

module.exports = router