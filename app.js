const express = require("express");
const { connectDB } = require('./config/database')

const User = require('./models/user');

const app = express();


app.post('/signup', async (req, res) => {
const user = new User ({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "sachin@kohli.com",
    age: "32",
    gender: 'Male',
    password: "sachin@123",
});
try{
    await user.save();
    res.send("User Added successfully!");
}catch(err){
    res.status(500).send("Error saving the user:" + err.message);
}
 

})



connectDB().then(() => {
    console.log('connected to db');
    app.listen(7777, ()=>{
        console.log("server startted at 7777");
    })
}).catch((err) => {
    console.log('something went wrong in db connection');
})


