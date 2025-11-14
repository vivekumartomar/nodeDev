const express = require("express");
const { connectDB } = require('./config/database')
const { adminAuth } = require('./middlewares/auth');
const User = require('./models/user');
const app = express();
app.use(express.json());

app.use('/', adminAuth);

/* To sign up new user */
app.post('/signup', async (req, res) => {
const user = new User (req.body);
try{
    await user.save();
    res.send("User Added successfully!");
}catch(err){
    res.status(500).send("Error saving the user:" + err.message);
}
 
})

/* get user based on mail */
    app.post('/user', async (req, res) => {
    const userEmail = req.body.emailId;
    console.log(userEmail);
        try{
        const user = await User.findOne({emailId: userEmail})
            if(!user){
                res.status(404).send("User not found");
            }else{
                res.send(user);
            }
        }catch(err){
            res.status(404).send("some thing went wrong"+ err);
        }
    })
/* feed api to get all users */
    app.get('/feed', async (req, res) => {
            try{
            const user = await User.find({})
                if(!user){
                    res.status(404).send("User not found");
                }else{
                    res.send(user);
                }
            }catch(err){
                res.status(404).send("some thing went wrong"+ err);
            }
        })

        /* Update an user */

        app.patch('/user', async(req, res) => {
            const userId = req.body.userId;
            const data = req.body;
            console.log("Received body:", req.body);

            try{
                const user = await User.findByIdAndUpdate(
                    userId,             
                    data,  
                    { new: true }           
                );
                console.log(user);
                if (!user) {
                    return res.status(404).send("User not found");
                }
                res.send("User updated successfully");
            }catch(e){
                res.status(404).send("some thing went wrong"+ err);
            }

        })

    // Detele a user from the database
    app.delete("/user", async (req, res) => {
        const userId = req.body.userId;
        try {
        const user = await User.findByIdAndDelete({ _id: userId });
        //const user = await User.findByIdAndDelete(userId);
    
        res.send("User deleted successfully");
        } catch (err) {
        res.status(400).send("Something went wrong ");
        }
    });

        connectDB().then(() => {    
            console.log('connected to db');
            app.listen(7777, ()=>{
                console.log("server startted at 7777");
            })
        }).catch((err) => {
            console.log('something went wrong in db connection');
        })


