const mongo = require('mongodb');
const mongoose = require('mongoose');

const ReportDetailSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now()
    }
});

const ReportSchema = new mongoose.Schema({
    username: {type: String, required: true},
    log: [ReportDetailSchema]
});

module.exports = { ReportSchema, ReportDetailSchema };