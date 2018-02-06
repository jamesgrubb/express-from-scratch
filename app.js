const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const routes = require('./routes/index');
const helpers = require('helpers');
require('dotenv').config()

app.use((req , res , next) => {
    res.locals.h = helpers;
    next();
})

//Connect to the database
mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

//Check connection
db.once('open' , () =>{
    console.log(`Connected to ${db}`);
})

db.on('error' , (err) => {
    console.error(`${err.message}`);
});

//Bring in models
require('./models/Articles')

app.set('view engine' , 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static' , express.static(path.join(__dirname, 'public')))
app.use('/' , routes )


app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})