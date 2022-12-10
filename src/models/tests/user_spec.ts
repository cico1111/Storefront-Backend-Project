// import { User, Users } from '../user';

// const store = new Users()
// let num: number

// describe("User Model", () => {
//   it('should have an create method', () => {
//     expect(store.create).toBeDefined();
//   });
//   it('should have an index method', () => {
//     expect(store.index).toBeDefined();
//   });

//   it('should have an show method', () => {
//     expect(store.show).toBeDefined();
//   });

//   it('create method should add a user', async () => {
//     const result = await store.create({
//       firstname: 'susan',
//       lastname: 'lee',
//       password: '123'
//     });
//     const listResult = await store.index()
//     num = listResult[listResult.length-1].id as number    
//     expect(result.id).toEqual(num)
//     expect(result.firstname).toEqual('susan')
//     expect(result.lastname).toEqual('lee')  

//   });
//   it('index method should return a list of users', async () => {
//     const result = await store.index();
//     console.log("list--:",result)
//     expect(result.length).toEqual(num);       
//   }); 

//   it('show method should return the correct user', async () => {
//     const result = await store.show(`${num}`);
//     expect(result.id).toEqual(num)
//     expect(result.firstname).toEqual('susan')
//     expect(result.lastname).toEqual('lee')
//   }); 

  
//  });