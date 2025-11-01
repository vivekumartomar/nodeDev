const express = require("express");

const app = express();

app.listen(7777, ()=>{
    console.log("server startted at 7777");
})

app.use("/abc", (req, res) => {
    res.send("hello world");
});

app.use("/test", (req, res) => {
    res.send("hello from test world");
});

app.use("/type", (req, res) => {
    res.send("hello world");
});
