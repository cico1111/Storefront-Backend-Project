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


## Data Shapes

#### Product
- id: SERIAL PRIMARY KEY
- name: VARCHAR(64) NOT NULL,
- price: integer NOT NULL

#### User
- id: SERIAL PRIMARY KEY,
- firstName: VARCHAR(100),
- lastName: VARCHAR(100),
- password: VARCHAR(100),

#### Orders
- id :SERIAL PRIMARY KEY
- id of each product in the order:bigint REFERENCES products(id)
- quantity of each product in the order: integer
- user_id : bigint REFERENCES users(id)
- status of order (active or complete): VARCHAR(15),
 