// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');
// crea un usuario
// api/usuarios
router.post('/', 
[
    check('name','Please insert a name').not().isEmpty(),
    check('email','Please insert a valid email').isEmail(),
    check('password','Password must be at least 6 characters long').isLength({min: 6})
],
    usuarioController.crearUsuario
);
module.exports = router;