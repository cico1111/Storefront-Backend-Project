# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page.Build the API that will support this application

## API Endpoints
#### Products
- Index: 'products/' [GET]
- Show:  'products/:id' [GET]
- Create [token required]: 'products/' [POST] 
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category):'products/category/:category' [GET]

#### Users
- Index [token required] : 'users/' [GET] 
- Show [token required] : 'users/:id' [GET] 
- Create N[token required] :'users/' [POST]

#### Orders
- Current Order by user (args: user id)[token required]: 'orders/user/:user_id' [GET] 
- [OPTIONAL] Completed Orders by user (args: user id)[token required]: 'orders/completed/:user_id' [GET]

## Data Shapes
#### Product
- id: SERIAL PRIMARY KEY
- name: VARCHAR(64) NOT NULL,
- price: integer NOT NULL
- [OPTIONAL] category

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
 