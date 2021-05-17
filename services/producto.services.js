const { seq } = require('async');
const sequelize = require ('../db/conexion')

module.exports.listarProducto = async () => {
    try {
        let res = await sequelize.query('SELECT * FROM dbo.productos')
        return res
    } catch (e) {
        console.log(e);
        throw new Error ('Ocurrio un problema en la consulta con la DB')    
    }
}

module.exports.nuevoProducto = async (producto) => {
    let productoNuevo = [
        producto.descripcion_prod,
        producto.precio, 
        producto.id_categoria
    ]
    try {
        let res  = await sequelize.query('INSERT INTO productos (descripcion_prod, precio, id_categoria) VALUES (?,?,?)',
        {
            replacements : productoNuevo, type:sequelize.QueryTypes.SELECT
        })
        return res
    } catch (e) {
        throw new Error ('Ocurrio un problema')
    }
}