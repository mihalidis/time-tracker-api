const express = require('express');

const bodyParser = require('body-parser');
require('dotenv').config();

const v1ReportRouter = require('./v1/routes/reportRoutes');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/v1/reports', v1ReportRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});