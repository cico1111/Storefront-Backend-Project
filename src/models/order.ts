//@ts-ignore
import Client from '../database'

export type Order = {
  id?: number;
  product_id: string;
  quantity: number;
  status: string;
  user_id: string;
}

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM orders'
  
      const result = await conn.query(sql)
  
      conn.release()
  
      return result.rows 
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Order> {
    try {
        const sql = 'SELECT * FROM orders WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn.query(sql, [id])

        conn.release()

        return result.rows[0]
    } catch (err) {
        throw new Error(`Could not get order ${id}. Error: ${err}`)
    }
  }

  async create(a: Order): Promise<Order> {
    try {
        const sql = 'INSERT INTO orders (product_id, quantity, status, user_id) VALUES($1, $2, $3,$4) RETURNING *'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn.query(sql, [a.product_id,a.quantity,a.status, a.user_id])

        const order = result.rows[0]

        conn.release()

        return order 
    } catch (err) {
        throw new Error(`Could not add orders ${a.status}. Error: ${err}`)
    }
  }

  async update(id: number, newOrder: Order): Promise<Order> {
    try {
      
      const sql = 'UPDATE orders SET product_id = $1, quantity = $2, status=$3 WHERE id = $4 RETURNING *';
       // @ts-ignore
      const conn = await Client.connect()
      const result = await conn.query(sql, [newOrder.product_id, newOrder.quantity, newOrder.status, id])
      const order = result.rows[0]
      conn.release()
      
      return order 
    } catch (err) {
      throw new Error(`Could not update order${id} for user ${newOrder.user_id}. ${err}`);
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const sql = 'DELETE FROM orders WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn.query(sql, [id])

        const article = result.rows[0]

        conn.release()

        return article  
    } catch (err) {
        throw new Error(`Could not delete order ${id}. Error: ${err}`)
    }
  }

  async addProduct(quantity:number, orderId:number, productId: number): Promise<Order>{
    try {
      
      const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES ($1,$2, $3) RETURNING *'
      //@ts-ignore
      const conn = await Client.connect()
      
      const result = await conn.query(sql, [quantity, orderId, productId])
      
      const order = result.rows[0]
      
      conn.release()

      return order

    } catch (error) {
       throw new Error(`Could not add product ${productId} to order ${orderId}: ${error}`)    
  
    }

  }
 }