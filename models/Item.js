const mongoose = require('mongoose');

const ItemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Item',ItemsSchema);