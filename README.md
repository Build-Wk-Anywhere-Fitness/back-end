# back-end

Anywhere Fitness API

## Endpoints

https://build-wk-anywhere-fitness.herokuapp.com/

### Auth

| Method | Endpoint           | Description                   | Requires                     | Authorized          |
| ------ | ------------------ | ----------------------------- | ---------------------------- | ------------------- |
| POST   | /api/auth/register | Registers new user            | Username, password, and role | Anyone              |
| POST   | /api/auth/login    | Grants access to user account | Username and password        | Instructor / Client |

### Users

| Method | Endpoint       | Description | Requires | Authorized |
| ------ | -------------- | ----------- | -------- | ---------- |
| GET    | /api/users     |             |          |            |
| GET    | /api/users/:id |             |          |            |
| PUT    | /api/users/:id |             |          |            |
| DELETE | /api/users/:id |             |          |            |

### Classes

| Method | Endpoint                | Description | Requires | Authorized |
| ------ | ----------------------- | ----------- | -------- | ---------- |
| POST   | /api/classes            |             |          |            |
| PUT    | /api/classes/:id        |             |          |            |
| DELETE | /api/classes/:id        |             |          |            |
| GET    | /api/classes            |             |          |            |
| GET    | /api/classes/:id        |             |          |            |
| GET    | /api/classes/time       |             |          |            |
| GET    | /api/classes/date       |             |          |            |
| GET    | /api/classes/duration   |             |          |            |
| GET    | /api/classes/type       |             |          |            |
| GET    | /api/classes/intensity  |             |          |            |
| GET    | /api/classes/location   |             |          |            |
| GET    | /api/classes/instructor |             |          |            |
