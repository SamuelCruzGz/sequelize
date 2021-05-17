const productoService = require ('../services/producto.services')

module.exports = (app) => {
    app.get('/libros', async (req, res)=>{
        try {
            let resp = await productoService.listarProducto()
            res.json(resp)
        } catch (e) {
            console.log(e);
            res.status(500).json({error:e.message})
        }
    })

    app.get('/libros/:titulo', async (req, res)=>{
        let descripcion_prod = req.params.descripcion_prod
    })

    app.post('/libros', async  (req, res)=>{
        let producto = req.body
        try {
            let resp = await productoService.nuevoProducto(producto)
            console.log(resp);
            res.json('El producto fue añadido correctamente')
        } catch (e) {
            console.log(e);
            res.status(500).json({error:e.message})
        }
    })
}