const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true // de esta forma mongo db elimina los espacios en blanco 
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    registered: {
        type: Date,
        default: Date.now() 
    }
});

module.exports = mongoose.model('Usuario',UsuariosSchema);