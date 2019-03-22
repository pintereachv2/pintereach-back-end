# Pintereach-back-end

Backend portion of the pintereach application with endpoints and jwt.

#  Install and Run
 
- Clone this repository.
- Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- Run the command `yarn` to install dependencies.
- Run `knex migrate:latest` to roll all migrations.
- In the root of the project add a .env file with the following variables:
- `JWT_SECRET=ADD A SECRET`
- This will be a jsonwebtoken secret string you generate
- Run `yarn server`
- The server will start a local server

# Server 
https://pintereacher.herokuapp.com

# Endpoints
| For | Method  | Endpoints | Description |
| ------------- | ------------- | ------------- |  ------------- |
| Register  | POST  | /api/register|  Required: username: 'example', password: 'pass', email: 'email@email.com'|
| Login  |   POST | /api/login | Required: username: 'example', password: 'pass'|
| Articles  | GET | /api/articles | Required: jwt |
| Users Articles  | GET | /api/articles/users | Required: jwt, Returns articles for the user logged in|
| Create |   POST | /api/articles | Required: title: 'example' , content: 'www.example.com', Creates new article for the specific user |
| Update  |  PUT | /api/articles/:id | Updates articles |
| Delete  |  DELETE | /api/articles/:id | Deletes articles |

# Response statuses for endpoints
``` Status Code: 200 Ok - GET & Put endpoints,
    Status Code: 500 Internal Server Error - GET, POST, DELETE Endpoints,
    Status Code: 404 Not Found - PUT & DELETE Endpoints,
    Status Code: 201 Created & 400 Bad Request - POST Endpoint
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
