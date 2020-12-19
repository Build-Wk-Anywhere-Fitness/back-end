# back-end

Anywhere Fitness API

## Endpoints

https://build-wk-anywhere-fitness.herokuapp.com/

### Auth

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

### Users

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /api/users     |
| GET    | /api/users/:id |
| DELETE | /api/users/:id |

### Classes

| Method | Endpoint                |
| ------ | ----------------------- |
| POST   | /api/classes            |
| PUT    | /api/classes/:id        |
| DELETE | /api/classes/:id        |
| GET    | /api/classes            |
| GET    | /api/classes/:id        |
| GET    | /api/classes/time       |
| GET    | /api/classes/date       |
| GET    | /api/classes/duration   |
| GET    | /api/classes/type       |
| GET    | /api/classes/intensity  |
| GET    | /api/classes/location   |
| GET    | /api/classes/instructor |
