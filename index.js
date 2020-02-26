const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors');

// create server
const app = express(); 

// conect to the database
conectarDB();

// habilitar cors
app.use(cors());

// active express.json to read data entered by users
app.use(express.json({ extended:true }));

// port 
const port = process.env.port || 4000;

// import routes
app.use('/api/usuarios',require('./routes/usuarios')); 
app.use('/api/auth',require('./routes/auth')); 


// start app
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at port ${PORT}`);
});