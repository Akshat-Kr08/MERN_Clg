const express = require('express')
const app=express()
const mongoose = require('mongoose')
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;
mongoose.connect("mongodb://localhost:27017/",()=>{console.log('DB Connected Successfully')})
app.listen(PORT,()=>{console.log(`listening on ${PORT}`)});