# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page.Build the API that will support this application

## API Endpoints
#### Products
- Index: 'products/' [GET]
- Show:  'products/:id' [GET]
- Create [token required]: 'products/' [POST] 
- Delete [token required]: 'products/:id [DELETE]
#### Users
- Index [token required]: 'users/' [GET] 
- Show [token required]: 'users/:id' [GET] 
- Create :'users/' [POST] 
- Delete [token required]: 'users/:id' [DELETE] 

#### Orders
- Index: 'orders/' [GET]
- Show:  'orders/:id' [GET]
- Create [token required]: 'orders/' [POST] 
- Delete [token required]: 'orders/:id [DELETE]
- Update [token required]: '/orders/:id'[PUT]
- AddProduct [token required]: '/orders/:id/products'[POST] 

## Data Shapes

#### Product
- id: SERIAL PRIMARY KEY[integer]NOT NULL
- name: [VARCHAR(64)] NOT NULL
- price: [integer] NOT NULL
- CREATE TABLE products (id SERIAL PRIMARY KEY,name VARCHAR(64) NOT NULL,price integer NOT NULL);
#### User
- id: SERIAL PRIMARY KEY [integer]NOT NULL
- firstName:[VARCHAR(100)] 
- lastName: [VARCHAR(100)] 
- password: [VARCHAR(100)] 
- CREATE TABLE users (id SERIAL PRIMARY KEY,firstName VARCHAR(100),lastName VARCHAR(100),
password_digest VARCHAR);

#### Orders
- id :SERIAL PRIMARY KEY[integer]NOT NULL
- product_id: (id of each product in the order) bigint REFERENCES products(id)[bigint]
- quantity: quantityof each product in the order[integer]
- user_id : bigint REFERENCES users(id)[bigint]
- status:status of order (active or complete)[VARCHAR(15)]
- CREATE TABLE orders (id SERIAL PRIMARY KEY,product_id bigint REFERENCES products(id),    quantity integer,status VARCHAR(15),user_id bigint REFERENCES users(id));

#### order_products
- id:  SERIAL PRIMARY KEY,[integer]NOT NULL
- quantity: [integer]
- order_id: bigint REFERENCES orders(id),[bigint]
- product_id: bigint REFERENCES products(id)[bigint]
- CREATE TABLE order_products (id SERIAL PRIMARY KEY,quantity integer,order_id bigint REFERENCES orders(id),product_id bigint REFERENCES products(id));


