const { addNewComments, getAllCommentss, getCommentsById, deleteCommentsById } = require("../controller/comments.controller")

const router = require("express").Router()


router.post("/", addNewComments)
router.get("/", getAllCommentss)
router.get("/:id", getCommentsById)
router.delete("/:id",deleteCommentsById)

module.exports = router