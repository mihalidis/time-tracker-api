const mongo = require('mongodb');
const mongoose = require('mongoose');

require('../Database/DBConnection');

const { ReportSchema, ReportDetailSchema } = require('../models/reportSchema');

const Report = mongoose.model("Report",ReportSchema);
const ReportDetail = mongoose.model("ReportDetail", ReportDetailSchema);

const getAllReports = (req, res) => {
    Report.find({},(err,allReports) => {
        if (err) throw err;
        res.send({ status: "OK", data: allReports });
    })
};

const getUserReports = (req, res) => {
    Report.findOne({_id: req.params.userId}, (err, reports) => {
        if (err) throw err;
        res.send({status: "OK", data: reports});
    })
}

const getOneReport = (req, res) => {
    Report.findOne({_id: req.params.userId}, (err, reports) => {
        if (err) throw err;
        const report = reports.log.filter(item => item.id === req.params.reportId);
        res.send({status: "OK", data: report});
    })
};

const createNewReport = (req, res) => {
    const newReport = new ReportDetail({
        "title":req.body.title,
        "duration":req.body.duration,
        "created_date": Date.now()
    });

    Report.findOne({_id: req.params.userId}, (err, reports) => {
        if (err) throw err;
        reports.log.push(newReport);
        reports.save();
        res.json(reports);
    })
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
    getUserReports
};