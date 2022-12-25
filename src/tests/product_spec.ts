import { Product, ProductStore } from '../models/product';

const store = new ProductStore()

describe("Product Model", () => {
  it('should have an create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have an show method', () => {
    expect(store.show).toBeDefined();
  });
 

  it('create method should add a product', async () => {
    const result = await store.create({
      name: 'book',
      price: 25        
    });    
    expect(result.name).toEqual('book')
    expect(result.price).toEqual(25)
    
  });     
  it('index method should return a list of products', async () => {
    const result = await store.index(); 
    expect(result[0].id).toEqual(1)  
    expect(result[0].name).toEqual('book')
    expect(result[0].price).toEqual(25)
  }); 

  it('show method should return the correct product', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      name: 'book',
      price: 25
    });
  });

});