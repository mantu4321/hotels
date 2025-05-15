const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
// const { model } = require('mongoose');
// const { route } = require('./personRoutes');


// Post Method to get Menu Items
router.post('/', async(req,res) => {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
})
// Get method to get the Menu Item
router.get('/', async(req, res) => {
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal server error'});
    }
})
// commited added for testing purposh
module.exports = router;
