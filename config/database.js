const mongoose = require('mongoose');

const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://vktomarjan5_db_user:T2975ilCeBYsgoQF@namastenode.hz22p8j.mongodb.net/HelloWorld');
};

module.exports = { connectDB }