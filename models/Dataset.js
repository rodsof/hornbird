const mongoose = require('mongoose');

const DatasetSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    energy : {
        type: String,
        required:  false
        }
});

module.exports = mongoose.model('Dataset',DatasetSchema);