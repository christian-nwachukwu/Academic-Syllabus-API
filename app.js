const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const SyllabusRoute = require('./routes/syllabus');

const app = express();

//connect to DB
mongoose.connect(process.env.connectDB, 
    {useNewUrlParser: true}, ()=>{
    console.log('connected to DB')
});

//path to dotenv file
const port = process.env.port || 4000;

//Middlewares
app.use(cors());
app.use(bodyParser.json());


app.use('/post', ()=>{
    console.log('middleware running')
});

//Syllabus route
app.use('/api/v1/syllabus', SyllabusRoute);


app.listen(port, console.log(`Server listening on http://localhost:${port}...Type Ctrl C to exit`));