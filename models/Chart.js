const mongoose = require('mongoose');

const ChartSchema = mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Chart',ChartSchema);