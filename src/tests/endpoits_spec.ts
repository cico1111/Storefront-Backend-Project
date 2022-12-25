import { Secret } from 'jsonwebtoken';
import supertest from 'supertest';
import { Order } from '../models/order';

import { Product } from '../models/product';
import { User } from '../models/user';
import app from '../server';

const request = supertest(app);
const SECRET = process.env.TOKEN_KEY as Secret;

describe('Product Handler', () => {
  const product: Product = {
    name: 'book',
    price: 25,
  };

  let token: string;
  let newUser: User;

  beforeAll(async () => {
    newUser= {      
      firstname: 'susan',
      lastname: 'lee',
      password: '123',
    };

    const { body } = await request.post('/users').send(newUser);
    token = body;
      
  });

//------------------------product-----------------------------------

  it('gets the <product>-- create-- endpoint', async (done) => {
    const res = await request
      .post('/products')
      .send(product)
      .set('Authorization', 'bearer ' + token);

    expect(res.status).toBe(200);    
    done();
  });

  it('gets the <product> --index-- endpoint', async (done) => {
    const res = await request.get('/products');
    expect(res.status).toBe(200);
    done();
  });

  it('gets the <product> --show-- endpoint', async (done) => {
    const res = await request.get('/products/1');
    expect(res.status).toBe(200);
    done();
  }); 

  it('gets the <product> --delete-- endpoint', async (done) => {
    const res = await request.delete('/products/2').set('Authorization', 'bearer ' + token);
    expect(res.status).toBe(200);
    done();
  });

  //----------------------user--------------------------------------------------

  it('should gets the <user>--create-- endpoint', async (done) => {
    const res = await request.post('/users').send(newUser);
    expect(res.status).toBe(200);
    done();
  });

  it('should gets the <user>--index-- endpoint', async (done) => {
    const res = await request.get('/users').set('Authorization', 'bearer ' + token);  
    expect(res.status).toBe(200);
    done();
  });

  
  it('should get the <user> --show-- endpoint', async (done) => {
    const res = await request.get('/users/1').set('Authorization', 'bearer ' + token);
    expect(res.status).toBe(200);
    done();
  });

  it('should get the <user> --auth-- endpoint', async (done) => {
    const res = await request
      .post('/users/authenticate')
      .send({
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        password: newUser.password,
      })
      .set('Authorization', 'bearer ' + token);  
    expect(res.status).toBe(200);
    done();
  });

  //---------------------------order-----------------------------------------
  it('should <order> --create-- endpoint', async (done) => {
    const res = await request
      .post('/orders')
      .set('Authorization', 'Bearer ' + token)
      .send({
        product_id: '1',
        quantity: 10,
        status: 'active', 
        user_id: '1'        
      });  
 
    expect(res.status).toBe(200);
    done();
  });

  it('gets the <order> -- index-- endpoint', async (done) => {
    request
      .get('/orders')
      .set('Authorization', 'bearer ' + token)
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
  
  it('should gets <order> --show-- endpoint', async (done) => {
    request
      .get(`/orders/1`)
      .set('Authorization', 'bearer ' + token)
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('should gets <order> -- delete--  endpoint', async (done) => {
    request
      .delete(`/orders/6`)
      .set('Authorization', 'bearer ' + token)
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('gets the <order> --update-- endpoint', async (done) => {
    const newOrder: Order = {
      product_id: '1',
      quantity: 10,
      status: 'active', 
      user_id: '1'        
    };
    const res = await request
      .put(`/orders/1`)
      .send(newOrder)
      .set('Authorization', 'bearer ' + token);

    expect(res.status).toBe(200);
    done();
  });

  it('should <order> --addProduct-- endpoint', async (done) => {
    const res = await request
      .post(`/orders/1/products`)      
      .send({
        productId: '1',
        quantity: 10       
      })
      .set('Authorization', 'bearer ' + token);  
      
    expect(res.status).toBe(200);
    done();
  });

});
