const mongo = require('mongodb');
const mongoose = require('mongoose');

const ReportDetailSchema = new mongoose.Schema({
    title: {
        type: String, // Work, Play, Study,Exercise,Social, Self_Care
        enum: ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self_Care', 'Other'],
        default: 'Other',
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    created_date:{
        type: Date,
        default: Date.now()
    },
    isDeleted: { type: Boolean, defaults: false }
});

const ReportSchema = new mongoose.Schema({
    username: {type: String, required: true},
    log: [ReportDetailSchema],
    isDeleted: { type: Boolean, defaults: false }
});

module.exports = { ReportSchema, ReportDetailSchema };