let express = require('express');

//#region routs 
let portfolioRouts = require('./pojects/Portfolio');
//#endregion

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('index route works');
    });
    app.post('/sendMail', (req, res) => {

    });
    app.use('/test', portfolioRouts);
};

