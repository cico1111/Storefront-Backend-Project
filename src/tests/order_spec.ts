import { Order, OrderStore } from '../models/order';

const store = new OrderStore()

describe("Order Model", () => {
  it('should have an create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have an show method', () => {
    expect(store.show).toBeDefined();
  });

  it('create method should add a order', async () => {
    const result = await store.create({
      product_id: '1',
      status: 'active',
      quantity: 10,
      user_id: '1'
    });

    expect(result.product_id).toEqual('1')
    expect(result.status).toEqual('active')
    expect(result.quantity).toEqual(10)
    expect(result.user_id).toEqual('1')
    
  });

  it('index method should return a list of orders', async () => {
    const result = await store.index();
    expect(result[0].id).toEqual(1)  
    expect(result[0].product_id).toEqual('1')
    expect(result[0].status).toEqual('active')
    expect(result[0].quantity).toEqual(10)
    expect(result[0].user_id).toEqual('1')  
  }); 

  it('show method should return the correct order', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
        id: 1,
        product_id: '1',
        status: 'active',
        quantity: 10,
        user_id:'1' 
    });
  });
 });