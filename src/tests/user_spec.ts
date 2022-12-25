import { User, Users } from '../models/user';

const store = new Users()

describe("User Model", () => {
  it('should have an create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have an show method', () => {
    expect(store.show).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await store.create({
      firstname: 'susan',
      lastname: 'lee',
      password: '123'
    });    
    
    expect(result.firstname).toEqual('susan')
    expect(result.lastname).toEqual('lee')  

  });
  it('index method should return a list of users', async () => {
    const result = await store.index();    
    expect(result[0].firstname).toEqual('susan')
    expect(result[0].lastname).toEqual('lee')  
  }); 

  it('show method should return the correct user', async () => {
    const result = await store.show("1");
    expect(result.id).toEqual(1)
    expect(result.firstname).toEqual('susan')
    expect(result.lastname).toEqual('lee')
  }); 

  
 });