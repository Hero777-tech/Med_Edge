const {Users} = require("../userModel")
const express = require('express');
const router = express.Router();

router.get('/api/getUsers',async(req,res)=>{
    try {
    
let logedUser= await Users.find()
console.log(logedUser)
        if(logedUser){
            return res.json(logedUser)
        }
        else{
            res.json("not found")
        }
    } catch (error) {
        res.json("internal server error")
        console.log(error)
    }
})
module.exports= router