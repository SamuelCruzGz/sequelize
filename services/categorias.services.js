const sequelize = require('../db/conexion')

module.exports.listarCategorias = async ()=>{
    try {
        let resultado = await sequelize.query('SELECT * FROM dbo.categoria')
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('Ocurrio un problema en la consulta con la DB');
    }
}
module.exports.nuevaCategoria = async (libro)=>{
    let libroNuevo = [
        libro.id_producto,
        libro.categoria
    ]
    try {
        let resultado = await sequelize.query(`INSERT INTO categoria (id_categoria, nombre_categoria VALUES (?,?)`,
        {replacements: libroNuevo, type: sequelize.QueryTypes.SELECT});
        return resultado
    }catch (err){
        console.log(err)
        throw new Error ('Ocurrio un problema al realizar el alta en la DB')
    }
}