const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PostScehma = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
   type:String,
   required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},
{timestamps:true}
);

module.exports = mongoose.model('users', PostScehma);