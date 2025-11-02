const express = require("express");

const app = express();

// to get the dynamic params
app.use('/user/:userid', (req, res)=>{
    console.log(req.params);
    res.send('req.params'+ req.params.userid);
})

// /to gets query param
app.get('/getuserdata', (req, res) => {
console.log(req.query)
   res.send(req.query)

//    next();
});

// app.use('/', (err, req, res, next) => {
//     res.status(500).send('something went wrong');
// })

app.listen(7777, ()=>{
    console.log("server startted at 7777");
})

