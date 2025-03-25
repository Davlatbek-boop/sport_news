const { addNewMedia, getAllMedias, getMediaById, deleteMediaById } = require("../controller/media.controller")

const router = require("express").Router()


router.post("/", addNewMedia)
router.get("/", getAllMedias)
router.get("/:id", getMediaById)
router.delete("/:id",deleteMediaById)

module.exports = router