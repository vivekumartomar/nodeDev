const express = require("express");
const { connectDB } = require('./config/database')

const app = express();

connectDB().then(() => {
    console.log('connected to db');
    app.listen(7777, ()=>{
        console.log("server startted at 7777");
    })
}).catch((err) => {
    console.log('something went wrong in db connection');
})


