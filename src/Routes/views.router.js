import { Router } from "express"
import ProductManager from '../../ProductManager.js'


//instancio la clase Productmanager

const PM = new ProductManager("./productos.json")

const viewsRouter=Router()

viewsRouter.get('/', async (req,resp)=>{
    let limit=req.query.limit
    //con un condicional veo si existe query y que sea numero.

    let productos=await PM.getProducts()
   
    if((limit==undefined || isNaN(limit) || limit>productos.length )){
        const listProduct = await PM.getProducts()
        resp.render("home",{
            product:listProduct,
            style:"style.css"
        })
    }else{
        
        const newProductos=productos.map(elemento=>elemento)
        newProductos.splice(limit-1,productos.length-limit)
        listProduct = newProductos
        resp.render("home",{
            product:listProduct,
            style:"style.css"
        })
    } 
})

viewsRouter.get('/realtimeproducts', async (req,resp)=>{
    let limit=req.query.limit
    //con un condicional veo si existe query y que sea numero.

    let productos=await PM.getProducts()
   
    if((limit==undefined || isNaN(limit) || limit>productos.length )){
        const listProduct = await PM.getProducts()
        resp.render("realTimeProducts",{
            product:listProduct,
            style:"style.css"
        })
    }else{
        
        const newProductos=productos.map(elemento=>elemento)
        newProductos.splice(limit-1,productos.length-limit)
        listProduct = newProductos
        resp.render("realTimeProducts",{
            product:listProduct,
            style:"style.css"
        })
    } 
})

export default viewsRouter