//Importar los modulos
const librosServices = require('../services/productos.services')

module.exports = (app)=> {

    app.get('/producto', async (req,res)=> {
        try {
            let resultado = await librosServices.listarProductos()
            res.json(resultado)
        }catch (err) {
            console.log(err)
            res.status(500).json({error: err.message})
        }
    });

    app.get('/producto/:descripcion' , async (req,res)=> {
        let titulo = req.params.titulo
    })

    app.post('/producto', async (req,res)=>{
        let libro = req.body
        try {
            let resultado = await librosServices.nuevoProducto(libro)
            console.log(resultado)
            res.json('El producto fue guardado correctamente en la DB')
        }catch (err) {
            console.log(err)
            res.status(500).json({error: err.message})
        }
    })
}