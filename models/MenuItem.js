const mongoose = require('mongoose');

// Define the MenuItem Schema

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    teste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour']
    },
    is_drink:{
        type: Boolean,
        default: false
    },
    ingredints: {
        type: [String],
        default: [],
    },
    num_sales:{
        type: Number,
        default: 0
    }
})

const MenuItem = mongoose.model('MeniItem', menuItemSchema);

module.exports = MenuItem;