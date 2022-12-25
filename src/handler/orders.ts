import express, { Request, Response} from 'express'
import { Order, OrderStore} from '../models/order'
import verifyAuthToken from './utility'

const orderRoutes = (app:express.Application) => {
    app.get('/orders', index)
    app.get('/orders/:id', show)
    app.post('/orders',verifyAuthToken, create)
    app.put('/orders/:id', verifyAuthToken, update);
    app.delete('/orders/:id', verifyAuthToken, destroy);
    app.post('/orders/:id/products',verifyAuthToken, addProduct)
 
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

const update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const product_id = req.body.product_id
      const quantity = req.body.quantity
      const status = req.body.status
      const user_id = req.body.user_id 
  
      if (!product_id || !status || !user_id ||!quantity) {
        res.status(400);
        res.send(`no parameters!!product_id=${product_id},status=${status},user_id=${user_id},quantity=${quantity}`);
        return;
      }  
      const order: Order = await store.update(id, {
        product_id,
        quantity,
        status,
        user_id,
      });  
      res.json(order);
    } catch (e) {
      res.status(400);
      res.json(e);
    }
  };
  

const destroy = async (_req: Request, res: Response) => {
  try {
    const deleted = await store.delete(_req.params.id)
    res.json(deleted)
  } catch (error) {
    res.json(error)
  }
   
}

const addProduct =async (_req:Request, res: Response) => {
    
  const orderId: number = parseInt(_req.params.id)
  const productId: number = _req.body.productId
  const quantity: number = parseInt(_req.body.quantity)
  try {
      const addProduct = await store.addProduct (quantity, orderId, productId)
      res.json(addProduct)
      
  } catch (error) {
      res.status(400)
      res.json(error)
  }
}
export default orderRoutes