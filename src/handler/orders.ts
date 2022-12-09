import express, { Request, Response} from 'express'
import { Order, OrderStore} from '../models/order'
import verifyAuthToken from './utility'

const orderRoutes = (app:express.Application) => {
    app.get('/orders', index)
    app.get('/orders/:id', show)
    app.post('/orders',verifyAuthToken, create)
    app.delete('/orders/:id', verifyAuthToken, destroy);
    // add product
    //app.post('/orders/:id/products', addProduct)
}

const store = new OrderStore()

const index =async (_req: Request, res:Response) => {
    const orders = await store.index()
    res.json(orders)
}

const show =async (_req:Request, res: Response) => {
    const order = await store.show(_req.params.id)
    res.json(order)
}

const create =async (_req:Request, res: Response) => {
    const order: Order = {
        product_id: _req.body.product_id,
        quantity: _req.body.quantity,
        status: _req.body.status,        
        user_id: _req.body.user_id        
    }
    try {
        const newOrder = await store.create(order)
        res.json(newOrder)
    } catch (error) {
        res.status(400)
        res.json(error)
    }
}
const destroy = async (_req: Request, res: Response) => {
    const deleted = await store.delete(_req.params.id)
    res.json(deleted)
}
// const addProduct =async (_req:Request, res: Response) => {
//     const orderId: string = _req.params.id
//     const productId: string = _req.body.productId
//     const quantity: number = parseInt(_req.body.quantity)
//     try {
//         const addProduct = await store.addProduct (quantity, orderId, productId)
//         res.json(addProduct)
        
//     } catch (error) {
//         res.status(400)
//         res.json(error)
//     }
// }

export default orderRoutes