module.exports.listarCategoria = async () => {
    try {
        let res = await sequelize.query('SELECT * FROM dbo.categoria')
        return res
    } catch (e) {
        
    }
}