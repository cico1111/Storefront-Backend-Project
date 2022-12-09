import express, {Request, Response} from 'express'
import {Product, ProductStore} from '../models/product'
import verifyAuthToken from './utility';


const productRoutes = (app: express.Application) => {
    app.get('/products', index);
    app.post('/products', verifyAuthToken, create);
    app.get('/products/:id', show);  
    app.delete('/products/:id', verifyAuthToken, destroy);
}

const store = new ProductStore()

const index = async(_req: Request, res: Response) => {
    const products = await store.index()
    res.json(products)
}
const show =async (_req:Request, res: Response) => {
    const order = await store.show(_req.params.id)
    res.json(order)
}
const create =async (_req: Request, res: Response) => {
    const product: Product = {
        name: _req.body.name,
        price: _req.body.price
    }
    try {
        const newProduct = await store.create(product)
        res.json(newProduct)
    } catch (error) {
        
    }
}
const destroy = async (_req: Request, res: Response) => {
    const deleted = await store.delete(_req.params.id)
    res.json(deleted)
}


export default productRoutes