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
        if (!usuario) {
            return res.status(400).json({msg: "The user doesn't exist"});
        }


        // crear el nuevo usuario
        usuario = new Usuario(req.body);

        // hasheamos password
        const salt = await bcryptjs.genSalt(10);  // salt genera has unico
        usuario.password = await bcryptjs.hash(password, salt);

        // guardar usuario
        await usuario.save();

        // crear y firmar el jwt
        const payload = { // esta es la informacion que va a guardar el jwt
            usuario : {
                id: usuario.id
            }
        };

        // firmar el jwt
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // una hora
        },(error, token) => {
            if(error) throw error;

            // mensaje de confirmacion
        res.json({ token });
        });

        
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
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