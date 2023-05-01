
const express = require('express');
const expressLoader = require('./express');
const bodyParser = require('body-parser');
const productRoutes = require('../routes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');

async function loadApp() {

    expressLoader(app);
    app.use(express.static(__dirname + '/../views'));
    
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true }));  
    app.use((err, req, res, next) => {
        const status = err.status || 500;
        res.status(status).json(err.message);
    });

    app.use('/shop', productRoutes);
}

loadApp();

module.exports = app;
