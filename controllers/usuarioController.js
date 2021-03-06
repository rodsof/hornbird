const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
exports.crearUsuario = async(req, res) => {

    // revisar si hay errores
    const errores = validationResult(req); // validation result devuelve arreglo de errores
    if (!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    // extraer email y password
    const { email, password } = req.body;
    try{
        // revisar que el usuario registrado sea unico

        let usuario = await Usuario.findOne({email});
        if (usuario) {
            return res.status(400).json({msg: "The user already exists"});
        }


        // crear el nuevo usuario
        usuario = new Usuario(req.body);

        // hasheamos password
        const salt = await bcryptjs.genSalt(10);  // salt genera has unico
        usuario.password = await bcryptjs.hash(password, salt);

        // guardar usuario
        await usuario.save();
    } catch (error) {
        console.log(error);
        res.status(400).send('Error');
    }
}

exports.getUsuarios = async (req, res) => {
    try {
        const users = await Usuario.find().sort({ name: -1 });; // chart itemid must be equal to item id
        res.json({ users });
      } catch (error) {
        console.log(error);
        res.status(500).send("Error");
      }
}


exports.deleteMember = async (req, res) => {
    try {
        // check if user exists
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            return res.status(404).json({msg: 'Inexistent User'});
        }

        // Delete
        await Usuario.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Deleted'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
}