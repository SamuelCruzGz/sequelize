const express = require('express')
const app = express()
require('dotenv').config()
const sequelize = require ('./db/conexion')
const productosRoutes = require('./routes/productos.routes')


app.use(express.json())

async function inicioServidor(){
    try {
        await sequelize.authenticate()
        console.log('Conexion correcta');
        app.listen(process.env.PORT, function(){
            console.log('Sistema Iniciado');
        })
    } catch (e) {
        console.log(e);
        console.log('No se conecto con la DB');
    }
}
inicioServidor()
productosRoutes(app)