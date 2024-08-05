
const express = require('express');
const router = express.Router();
const {Pres} = require("../models/prescription");

router.get('/api/pres',async(req,res)=>{
    try {
    
let pres= await Pres.find()

     res.json(pres)
    } catch (error) {
        res.json("internal server error")
        console.log(error)
    }
})
module.exports= router