const sequelize = require('../db/conexion')
module.exports.listarProductos = async ()=>{
    try {
        let resultado = await sequelize.query('SELECT * FROM dbo.productos')
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('Ocurrio un problema en la consulta con la DB')
    }
}

module.exports.nuevoProducto = async (libro)=>{
    let libroNuevo = [
        libro.id_producto,
        libro.descripcion,
        libro.precio,
        libro.id_categoria
    ]
    try {
        let resultado = await sequelize.query(`INSERT INTO dbo.productos (descripcion_prod, precio, id_categoria VALUES (?,?,?)`,
        {replacements: libroNuevo, type: sequelize.QueryTypes.SELECT});
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('Ocurrio un problema al realizar el alta en la DB')
    }
}