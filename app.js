const express = require("express");

const app = express();

// to get the dynamic params
app.use('/user', (req, res, next)=>{
    console.log('1st route handler');
    next();

},(req, res, next) =>{
    console.log('2nd route handler');
    next();
}, (req, res, next) =>{
    console.log('3rd route handler');
    next();
}, (req, res, next) =>{
    console.log('4th route handler');
    // throw new Error("Something went wrong!");
    res.send('done!!!');

} , (error, req, res, next) =>{
    console.log(error)
    res.status(500).send("Something went wrong!");
}

)

app.listen(7777, ()=>{
    console.log("server startted at 7777");
})

