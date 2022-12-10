// import { Product, ProductStore } from '../product';

// const store = new ProductStore()
// let num: number

// describe("Product Model", () => {
//   it('should have an create method', () => {
//     expect(store.create).toBeDefined();
//   });
//   it('should have an index method', () => {
//     expect(store.index).toBeDefined();
//   });

//   it('should have an show method', () => {
//     expect(store.show).toBeDefined();
//   });
 

//   it('create method should add a product', async () => {
//     const result = await store.create({
//       name: 'book',
//       price: 25        
//     });
//     const listResult = await store.index()
//     num = listResult[listResult.length-1].id as number    
//     console.log("create--:",result)
//     console.log("create--num:",num)
//     expect(result.id).toEqual(num)
//     expect(result.name).toEqual('book')
//     expect(result.price).toEqual(25)
    
//   });     
//   it('index method should return a list of products', async () => {
//     const result = await store.index();
//     console.log("list--:",result)    
//     expect(result.length).toEqual(num); 
//   }); 

//   it('show method should return the correct product', async () => {
//     const result = await store.show(`${num}`);
//     expect(result).toEqual({
//       id: num,
//       name: 'book',
//       price: 25
//     });
//   });

// });