const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors');


// habilitar cors
app.use(cors());

// crear el servidor
const app = express(); // vamos a estar usando middleware

app.all('*', function(req, res, next) {
    var origin = req.get('origin'); 
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// conectar a la base de datos
conectarDB();

// habilitar express.json para leer datos que el usuario coloque
app.use(express.json({ extended:true }));

// puerto de la app
const port = process.env.PORT || 4000;

// importar rutas
app.use('/api/usuarios',require('./routes/usuarios')); 
app.use('/api/auth',require('./routes/auth')); 




// arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});