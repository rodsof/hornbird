const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.autenticarUsuario = async (req, res) => {
  // revisar si hay errores
  const errores = validationResult(req); // validation result devuelve arreglo de errores
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // extraer email y password
  const { email, password } = req.body;
  try {
    // revisar que sea un usuario registrado
    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ msg: "The user does not exist" });
    }
    // revisar password
    const passCorrecto = await bcryptjs.compare(password, usuario.password);
    if (!passCorrecto) {
      return res.status(400).json({ msg: "Wrong password" });
    }

    // si todo es correcto procedemos a crear jwt
    // crear y firmar el jwt
    const payload = {
      // esta es la informacion que va a guardar el jwt
      usuario: {
        id: usuario.id
      }
    };

    // firmar el jwt
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600 // una hora
      },
      (error, token) => {
        if (error) throw error;

        // mensaje de confirmacion
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// obtiene qué usuario esta autenticado
exports.usuarioAutenticado = async (req,res) => {
  try {
    const usuario = await (await Usuario.findById(req.usuario.id)).isSelected('-password')  ;
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'Hubo un error'});
  }
}