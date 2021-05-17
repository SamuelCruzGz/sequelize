const categoriaServices = require('../services/categorias.services')
module.exports = (app)=>{
    app.get('/categoria', async (req,res)=> {
        try {
            let resultado = await categoriaServices.listarCategorias()
            res.json(resultado)
        }catch (err) {
            console.log(err)
            res.status(500).json({error: err.message})
        }
    });

    app.post('/categoria', async (req,res)=>{
        let libro = req.body
        try {
            let resultado = await categoriaServices.nuevaCategoria(libro)
            console.log(resultado)
            res.json('El producto fue guardado correctamente en la DB')
        }catch (err) {
            console.log(err)
            res.status(500).json({error: err.message})
        }
    })
}