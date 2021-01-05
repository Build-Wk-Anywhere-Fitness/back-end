# back-end

Anywhere Fitness API

## Endpoints

https://build-wk-anywhere-fitness.herokuapp.com/

### Auth

| Method | Endpoint           | Description                   | Requires                 | Authorized          |
| ------ | ------------------ | ----------------------------- | ------------------------ | ------------------- |
| POST   | /api/auth/register | Registers new user            | username, password, role | Anyone              |
| POST   | /api/auth/login    | Grants access to user account | username, password       | Instructor / Client |

### Users

| Method | Endpoint       | Description                       | Requires                 | Authorized |
| ------ | -------------- | --------------------------------- | ------------------------ | ---------- |
| GET    | /api/users     | Returns all users in the database | n/a                      | Instructor |
| GET    | /api/users/:id | Returns user with matching id     | n/a                      | Instructor |
| PUT    | /api/users/:id | Updates user with matching id     | all fields being updated | Instructor |
| DELETE | /api/users/:id | Deletes user with matching id     | n/a                      | Instructor |

### Classes

| Method | Endpoint                | Description                         | Requires                                                                                    | Authorized          |
| ------ | ----------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------- | ------------------- |
| POST   | /api/classes            | Creates a new class                 | name, type, start_time, duration, intensity_level, location, attendee_count, max_class_size | Instructor          |
| PUT    | /api/classes/:id        | Updates class with matching id      | all fields being updated                                                                    | Instructor          |
| DELETE | /api/classes/:id        | Deletes class with matching id      | n/a                                                                                         | Instructor          |
| GET    | /api/classes            | Returns all classes in the database | n/a                                                                                         | Instructor / Client |
| GET    | /api/classes/:id        | Returns class with matching id      | n/a                                                                                         | Instructor / Client |
| GET    | /api/classes/time       | Under maintenance                   | time                                                                                        | Instructor / Client |
| GET    | /api/classes/date       | Under maintenance                   | date                                                                                        | Instructor / Client |
| GET    | /api/classes/duration   | Under maintenance                   | duration                                                                                    | Instructor / Client |
| GET    | /api/classes/type       | Under maintenance                   | type                                                                                        | Instructor / Client |
| GET    | /api/classes/intensity  | Under maintenance                   | intensity                                                                                   | Instructor / Client |
| GET    | /api/classes/location   | Under maintenance                   | location                                                                                    | Instructor / Client |
| GET    | /api/classes/instructor | Under maintenance                   | instructor                                                                                  | Instructor / Client |
