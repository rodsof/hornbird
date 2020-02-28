const mongoose = require('mongoose');

const ChartSchema = mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Chart',ChartSchema);