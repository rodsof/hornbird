const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: false,
            useFindAndModify: false
        })
    } catch (error) {
        console.log(error);
        process.exit(1); // detener la app en caso de que haya error en la conexion
    }

}
    module.exports = conectarDB;