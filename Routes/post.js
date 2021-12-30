const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');


require('../Model/Post');
let USERS = mongoose.model('users');


router.get('/all-users' , async(req ,res)=>{
    let allData = await USERS.find({});
    res.status(200).json({allData , message : 'Data fetched'})
})

router.post('/create-user' , async(req,res)=>{
    let {firstname,lastname, email, phone,password} = req.body;
    let newUser = new USERS({firstname,lastname, email, phone,password});
    await newUser.save();
    res.status('201').json({message:'User has been created'})
})

router.put('/update-user/:id', async(req,res)=>{
    let editUser = await USERS.findByIdAndUpdate(req.params.id,{
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,  
        phone:req.body.phone,
        password:req.body.password
    },{
        new:true
    }
    );
    await editUser.save();
       res.status(201).json({editUser , message:'User has been updated successfully'})
    })

router.delete('/delete-user/:id', async(req,res)=>{
    await USERS.findByIdAndDelete({_id:req.params.id})
    res.status(200).json({message:'User Deleted'})
})

module.exports = router;