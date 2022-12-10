# Storefront Backend Project

## Installation Instructions

yarn or npm install

## package installation instructions
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Connect to the database
- su postgres
- psql postgres
- in psql run the following:
    CREATE USER full_stack_user WITH PASSWORD 'password123';
    CREATE DATABASE full_stack_dev;
    CREATE DATABASE full_stack_test;
    \c full_stack_dev
    GRANT ALL PRIVILEGES ON DATABASE full_stack_dev TO full_stack_user;
- to test that it is working run \dt and it should output "No relations found."
- connect to the database:
    su postgres 
    $ psql -U full_stack_user postgres
## ports the backend and database are running on
- starting app on: 0.0.0.0:3000
- database are running on:5432

## .env
- POSTGRES_HOST=127.0.0.1
- POSTGRES_DB=full_stack_dev
- POSTGRES_TEST_DB=full_stack_test
- POSTGRES_USER=full_stack_user
- POSTGRES_PASSWORD=password123
- ENV=dev
- BCRYPT_PASSWORD=your-secret-password
- SALT_ROUNDS=10
- TOKEN_SECRET=alohome123

## Start App
yarn watch
## Migrate Database
db-migrate up
## Testing
yarn test