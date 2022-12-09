import { Product, ProductStore } from '../product';

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

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

  it('create method should add a product', async () => {
    const result = await store.create({
        name: 'book',
        price: 25        
    });
    console.log("create--:",result)
    expect(result).toEqual({
      id: 2,
      name: 'book',
      price: 25 
    });
  });
  it('index method should return a list of products', async () => {
    const result = await store.index();
    console.log("list--:",result)
    expect(result[0].id).toEqual(1);
    expect(result[1].id).toEqual(2);
    expect(result[2].id).toEqual(3);
  }); 

  it('show method should return the correct product', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      name: 'book',
      price: 25
    });
  });

  it('delete method should remove the product', async () => {
    store.delete("2");
    const result = await store.show("2")
    console.log(result)
    expect(result).toBeUndefined();
  });
});