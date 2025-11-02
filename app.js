const express = require("express");
const { connectDB } = require('./config/database')
const { adminAuth } = require('./middlewares/auth');
const User = require('./models/user');

const app = express();
app.use('/', adminAuth);

app.post('/signup', async (req, res) => {
const user = new User ({
    firstName: "Vivek",
    lastName: "Kumar",
    emailId: "vivek@gmail.com",
    age: "32",
    gender: 'Male',
    password: "adminAuth@123",
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


