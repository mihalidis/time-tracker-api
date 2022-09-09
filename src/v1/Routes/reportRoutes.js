const express = require("express");
const ReportController = require("../../controllers/ReportController");

const router = express.Router();

router.get("/", ReportController.getAllReports);

router.get("/:reportId", ReportController.getOneReport);

router.post("/", ReportController.createNewReport);

router.patch("/:reportId", ReportController.updateOneReport);

router.delete("/:reportId", ReportController.deleteOneReport);

module.exports = router;