const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    console.log(process.env.DB_MONGO);
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    } catch (error) {
        console.log(error);
        process.exit(1); // detener la app en caso de que haya error en la conexion
    }

}
    module.exports = conectarDB;