const connectToMongo = require('./db');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3001;

connectToMongo();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
extended:true
}));

app.use('/auth',require('./routes/register'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});