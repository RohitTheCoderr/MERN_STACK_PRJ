const bodyParser = require('body-parser');
const express=require('express')
const app=express();
require('dotenv').config();

require('./config/db')

const PORT= process.env.PORT || 8080

// app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log(`server is ready to run on port ${PORT}`);
})