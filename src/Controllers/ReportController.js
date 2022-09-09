const mongo = require('mongodb');
const mongoose = require('mongoose');

require('../Database/DBConnection');

const { ReportSchema } = require('../models/reportSchema');

const Report = mongoose.model("Report",ReportSchema)

const getAllReports = (req, res) => {
    Report.find({},(err,allReports) => {
        if (err) throw err;
        res.send({ status: "OK", data: allReports });
    })
};

const getOneReport = (req, res) => {
    res.send("Get an existing report");
};

const createNewReport = (req, res) => {
    const newReport = new Report({
        "username": "test",
        "log": [{"title":"testss","duration":566, "created_date": Date.now()}]
    });

    newReport.save();
    res.json(newReport);
};

const updateOneReport = (req, res) => {
    res.send("Update an existing report");
};

const deleteOneReport = (req, res) => {
    res.send("Delete an existing report");
};

module.exports = {
    getAllReports,
    getOneReport,
    createNewReport,
    updateOneReport,
    deleteOneReport,
};