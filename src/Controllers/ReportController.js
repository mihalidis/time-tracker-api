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

        res.send({status: "OK", data: reports.log.filter(report => report.isDeleted === false)});
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
    Report.findOne({_id: req.params.userId}, (err, reports) => {
        if (err) throw err;
        const report = reports.log.find(report => report._id.valueOf() === req.params.reportId);
        if(!!report) {
            report.duration = req.body.duration;
        }
        reports.save();
        res.json(reports);
    });
};

const deleteOneReport = (req, res) => {
    Report.findOne({_id: req.params.userId}, (err, reports) => {
        if (err) throw err;
        const report = reports.log.find(report => report._id.valueOf() === req.params.reportId);
        if(!!report) {
            report.isDeleted = true;
        }
        reports.save();
        res.json(reports);
    });
};

module.exports = {
    getAllReports,
    getOneReport,
    createNewReport,
    updateOneReport,
    deleteOneReport,
    getUserReports
};