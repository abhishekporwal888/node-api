const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const post = require('./Routes/post')

let URL = 'mongodb://localhost:27017/user';
mongoose.connect(URL , err=>{
    if (err) throw err;
    console.log("Database Connected");
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/userinfo' , post)

app.listen(4000, err=>{
    console.log("App is running on port 4000")
});