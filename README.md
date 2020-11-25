# yumfood
A food ordering system with NodeJS; Project made for Vertilogic Technical Test.

# Guide
A comprehensive guide from server setup to endpoints usage

## Setup
### Requirement
- NodeJS 12, or better
- NPM 6, or better

### Instruction
1. Clone this repo into your computer
2. In root directory of this repository, open your command line and run 'npm run dev'
3. Once the installation finished and server's running, access http://localhost:3000 for endpoint testing

## Endpoints
All responses from endpoints are in JSON format, and body forms are in urlencoded or JSON format.

### GET `/vendors/`
Returns all existing vendor(s) in database

### GET `/vendors/?tags=`
Returns filtered existing vendor(s) in database by a tag provided in url query

### POST `/vendors/`
### Request Body
>
  "name": <string>
  "logo": <string>
>
(Name's length capped at 128 chars)
Adds a vendor into the database by value provided in request body
  
### PATCH `/vendors/<id>/`
### Request Body
>
  "name": <string>
  "logo": <string>
>
Edit existing vendor to a newly inputted value accordingly
  
### DELETE `/vendors/<id>/`
Deletes inputted id of a vendor record in database

### GET `/vendors/<id>/dishes`
Returns all the dishes exist from the specified vendor

### GET `/order`
Returns order created by user

### POST `/order`
### Request Body
>
  "dish_id": <integer>
  "special_request": <string>
  "quantity": <integer>
>
Adds an order into the database by value provided in request body
