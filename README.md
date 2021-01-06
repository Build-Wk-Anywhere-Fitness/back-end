# Anywhere Fitness

## Endpoints

https://build-wk-anywhere-fitness.herokuapp.com/

### Seed

| Username   | Password |
| ---------- | -------- |
| admin      | password |
| instructor | password |
| client     | password |

### Auth

| Method | Endpoint           | Description                   | Requires                 | Authorized                  |
| ------ | ------------------ | ----------------------------- | ------------------------ | --------------------------- |
| POST   | /api/auth/register | Registers new user            | username, password, role | Anyone                      |
| POST   | /api/auth/login    | Grants access to user account | username, password       | Admin / Instructor / Client |

### Users

| Method | Endpoint       | Description                       | Requires                 | Authorized |
| ------ | -------------- | --------------------------------- | ------------------------ | ---------- |
| GET    | /api/users     | Returns all users in the database | n/a                      | Admin      |
| GET    | /api/users/:id | Returns user with matching id     | n/a                      | Admin      |
| PUT    | /api/users/:id | Updates user with matching id     | all fields being updated | Admin      |
| DELETE | /api/users/:id | Deletes user with matching id     | n/a                      | Admin      |

### Classes

| Method | Endpoint                | Description                                   | Requires                                                                                    | Authorized          |
| ------ | ----------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------- |
| POST   | /api/classes            | Creates a new class                           | name, type, start_time, duration, intensity_level, location, attendee_count, max_class_size | Instructor          |
| PUT    | /api/classes/:id        | Updates class with matching id                | all fields being updated                                                                    | Instructor          |
| DELETE | /api/classes/:id        | Deletes class with matching id                | n/a                                                                                         | Instructor          |
| GET    | /api/classes            | Returns all classes in the database           | n/a                                                                                         | Instructor / Client |
| GET    | /api/classes/:id        | Returns class with matching id                | n/a                                                                                         | Instructor / Client |
| POST   | /api/classes/time       | Returns classes with matching start time      | start_time                                                                                  | Instructor / Client |
| POST   | /api/classes/date       | UNDER MAINTENANCE                             | date                                                                                        | Instructor / Client |
| POST   | /api/classes/duration   | Returns classes with matching duration        | duration                                                                                    | Instructor / Client |
| POST   | /api/classes/type       | Returns classes with matching type            | type                                                                                        | Instructor / Client |
| POST   | /api/classes/intensity  | Returns classes with matching intensity level | intensity_level                                                                             | Instructor / Client |
| POST   | /api/classes/location   | Returns classes with matching location        | location                                                                                    | Instructor / Client |
| POST   | /api/classes/instructor | UNDER MAINTENANCE                             | instructor                                                                                  | Instructor / Client |
