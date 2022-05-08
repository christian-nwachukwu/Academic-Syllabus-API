const express = require('express')
const dotenv = require('dotenv');

const app = express();

//path to dotenv file
dotenv.config({path:'config.env'})
const port = process.env.port || 4000;

app.get('/', (req, res) =>{
    res.send('index page');
});

app.listen(port, console.log(`Server listening on http://localhost:${port}...Type Ctrl C to exit`));