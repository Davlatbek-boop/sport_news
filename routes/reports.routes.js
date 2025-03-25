const {
  addNewReports,
  getAllReportss,
  getReportsById,
  deleteReportsById,
} = require("../controller/reports.controller");

const router = require("express").Router();

router.post("/", addNewReports);
router.get("/", getAllReportss);
router.get("/:id", getReportsById);
router.delete("/:id", deleteReportsById);

module.exports = router;
