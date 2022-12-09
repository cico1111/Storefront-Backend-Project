import { Order, OrderStore } from '../order';

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

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

  it('create method should add a order', async () => {
    const result = await store.create({
      product_id: '1',
      status: 'active',
      quantity: '10',
      user_id: '1'
    });
    console.log("create--:",result)
    expect(result).toEqual({
      id: 1,
      product_id: '1',
      status: 'active',
      quantity: '10',
      user_id:'1' 
    });
  });
  it('index method should return a list of orders', async () => {
    const result = await store.index();
    console.log("list--:",result)
    expect(result[0].id).toEqual(2);
    expect(result[1].id).toEqual(3);
    expect(result[2].id).toEqual(4);
   
  }); 

  it('show method should return the correct order', async () => {
    const result = await store.show("3");
    expect(result).toEqual({
        id: 3,
        product_id: '1',
        status: 'active',
        quantity: '10',
        user_id:'1' 
    });
  });

  it('delete method should remove the order', async () => {
    store.delete("6");
    const result = await store.show("6")
    console.log(result)
    expect(result).toBeUndefined();
  });
 });