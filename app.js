//Importamos los modulos
const express = require('express')
const app = express()
require('dotenv').config()
const sequelize = require('./db/conexion')
const productosRoute = require('./routes/productos.routes')
const categoriaRoutes = require('./routes/categorias.routes')


//Middleware globales
app.use(express.json())

//Iniciamos nuestro servidor

async function inicioServidor() {
    try {
        //console.log(process.env.DB_USER)
        await sequelize.authenticate();
        console.log('Conexion con la DB correcta!')
        app.listen(process.env.PORT, function (){
            console.log(`Sistema iniciado en el puerto ${process.env.PORT}`)
        })
    }catch (err){
        console.log(err)
        console.log('No se pudo conectar con la DB')
    }
}

inicioServidor();

//Routes
productosRoute(app);
categoriaRoutes(app);