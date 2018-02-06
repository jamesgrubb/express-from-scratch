require('./models/Store');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 3000;
const routes = require('./routes/index');
const helpers = require('./helpers');

const app = express();

require('dotenv').config()

// app.use((req , res , next) => {
//     res.locals.h = helpers;
//     next();
// })


// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DB_URL);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!



app.set('view engine' , 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static' , express.static(path.join(__dirname, 'public')))
app.use('/' , routes )



app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})