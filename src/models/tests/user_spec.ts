import { User, Users } from '../user';

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

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });

  it('create method should add a user', async () => {
    const result = await store.create({
      firstname: 'susan',
      lastname: 'lee',
      password: '123'
    });
    console.log("create--:",result)
    expect(store.authenticate('susan','lee',"123")).not.toBeNull();
  });
  it('index method should return a list of users', async () => {
    const result = await store.index();
    console.log("list--:",result)
    expect(result[0].id).toEqual(1);
    expect(result[1].id).toEqual(2);
    expect(result[2].id).toEqual(3);
  }); 

  it('show method should return the correct user', async () => {
    const result = await store.show("1");

    expect(result.id).toEqual(1)
    expect(result.firstname).toEqual('susan')
    expect(result.lastname).toEqual('lee')
  });

 

  it('delete method should remove the user', async () => {
    store.delete("3");
    const result = await store.show("3")
    console.log("^^^^^^^",result)
    expect(result).toBeUndefined();
    console.log("after deleted",await store.index())    
    
  });
 });