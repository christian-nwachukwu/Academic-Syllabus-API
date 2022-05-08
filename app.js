const express = require('express');
require('dotenv/config');
const mongoose = require('mongoose');

const app = express();

//connect to DB
mongoose.connect(process.env.connectDB, 
    {useNewUrlParser: true}, ()=>{
    console.log('connected to DB')
});

//path to dotenv file
const port = process.env.port || 4000;

//Middlewares
app.use('/post', ()=>{
    console.log('middleware running')
});


app.listen(port, console.log(`Server listening on http://localhost:${port}...Type Ctrl C to exit`));