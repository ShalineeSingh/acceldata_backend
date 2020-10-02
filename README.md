# acceldata_backend

All the apis are defined in routes/apis.js

## List of APIs

1. `/list/all`
2. `/search`
3. `/order`

## API description

1. `/list/all`

This is used to get all the orders for the day

2. `/search`

`query param : 'name'`
This api is used to search by user name in the list page

3. `/order`

This is used to place an order. It will add the current order of burgers to the existing list.

## Steps to run the project

`npm start`

It will start the server on port 3000
