const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors');




// crear el servidor
const app = express(); // vamos a estar usando middleware
// habilitar cors
app.use(cors());
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
app.use('/api/charts',require('./routes/charts')); 
app.use('/api/items',require('./routes/items')); 
app.use('/api/dataset',require('./routes/dataset'));
app.use('/api/alarms',require('./routes/alarms'));


// start app
// for deployment on heroku '0.0.0.0',
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at ${port}`);
});