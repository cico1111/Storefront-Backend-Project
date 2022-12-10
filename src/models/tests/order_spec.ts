// import { Order, OrderStore } from '../order';

// const store = new OrderStore()
// let num: number
// describe("Order Model", () => {
//   it('should have an create method', () => {
//     expect(store.create).toBeDefined();
//   });
//   it('should have an index method', () => {
//     expect(store.index).toBeDefined();
//   });

//   it('should have an show method', () => {
//     expect(store.show).toBeDefined();
//   });

//   it('create method should add a order', async () => {
//     const result = await store.create({
//       product_id: '1',
//       status: 'active',
//       quantity: 10,
//       user_id: '1'
//     });

//     const listResult = await store.index()
//     num = listResult[listResult.length-1].id as number    
//     expect(result.id).toEqual(num)
//     expect(result.product_id).toEqual('1')
//     expect(result.status).toEqual('active')
//     expect(result.quantity).toEqual(10)
//     expect(result.user_id).toEqual('1')
    
//   });

//   it('index method should return a list of orders', async () => {
//     const result = await store.index();
//     console.log("list--:",result)
//     expect(result.length).toEqual(num-1);   
//   }); 

//   it('show method should return the correct order', async () => {
//     const result = await store.show(`${num}`);
//     expect(result).toEqual({
//         id: num,
//         product_id: '1',
//         status: 'active',
//         quantity: 10,
//         user_id:'1' 
//     });
//   });
//  });