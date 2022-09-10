const express = require("express");
const ReportController = require("../../controllers/ReportController");

const router = express.Router();

router.get("/", ReportController.getAllReports);

router.get("/:userId", ReportController.getUserReports);

router.get("/:userId/:reportId", ReportController.getOneReport);

router.post("/:userId", ReportController.createNewReport);

router.patch("/:userId/:reportId", ReportController.updateOneReport);

router.delete("/:userId/:reportId", ReportController.deleteOneReport);

module.exports = router;