# Med Schedule

## Implementation
This repository contains a Medical Scheduling application.
The information is stored in a Database.
The application is secured based on OAuth2 protocol, in order to ensure a minimum data security.
Thus, the application user should register and sign in into the application to consult the stored information.

For testing purposes, it uses H2 Database, which may be easily replaced for production uses.
If changing the Database, Flyway migrations should be adjusted.

Full documentation can be seen at `http://localhost:8080/swagger-ui.html`

## Endpoints
- [GET] `/doctor` returns all doctors.
- [POST] `/doctor` creates a new doctor.

- [GET] `/customer` returns all customers.
- [POST] `/customer` creates a new customer.

- [GET] `/appointment` returns all appointments.
- [POST] `/appointment` creates a new appointment.

- [POST] `/user` adds a new user
- [POST] `/oauth/token` sign in the application

## Authentication

Default user credentials:
Email: `admin@admin.com`
Password: `123`

## Endpoints

### 1: [GET] `/doctor`

Response:
```json
    [
        {
            "id": 1,
            "name": "Kirk MD.",
            "speciality": "Neurologist"
        },
        {
            "id": 2,
            "name": "Wilson MD.",
            "speciality": "Oncologist"
        },
        ...
    ]
```

### 2: [POST] `/doctor`

```json
    {
        "name": "Wilson MD.",
        "speciality": "Oncologist"
    }
```
Response: `Status: 201 Created`

### 3: [GET] `/customer`

Response:
```json
    [
        {
            "id": 1,
            "name": "Oslo",
        },
        {
            "id": 2,
            "name": "Clerance",
        },
        ...
    ]
```

### 4: [POST] `/customer`

```json
    {
        "name": "Clerance",
    }
```
Response: `Status: 201 Created`

### 5: [GET] `/appointment`

Response:
```json
    [
        {
            "id": 1,
            "date": "2020-08-20T23:56:46.866",
            "doctor": {
                "id": 1,
                "name": "Jurandir MD.",
                "speciality": "Neurologist"
            },
            "customer": {
                "id": 1,
                "name": "Clarence"
            },
            "dateConverted": {
                "literal": "2020-08-20T23:56:46.866",
                "clean": "2020-Aug-20",
                "complete": "2020-08-20 - 23:56:46"
            }
        }
        ...
    ]
```

### 6: [POST] `/appointment`

```json
    {
        "doctor": {
            "id": 1
        },
        "customer": {
            "id": 1
        },
        "date": "2020-08-20T04:59"
    }
```
Response: `Status: 201 Created`

## Running

First things first:
- Make sure `Java` environment variable is correctly set.
- Make sure `Maven` environment variable is correctly set.
- Make sure `Node.js` and `Yarn` are installed and environment variables correctly set.

After cloning, or download and extract the repository:

### Spring Boot API

In the root folder of Spring Boot project,

On Windows,

```ps
    .\mvnw spring-boot:run
```

On Linux,

```sh
    sudo chmod +x ./mvnw
    sudo ./mvnw spring-boot:run
```


### ReactJS Client

```ps
    yarn
    yarn start
```


### Application defaults

- By default the API runs on port `8080` and front-end client app runs on port `3000`

Other configuration may be change in the [`application.properties`](/MedSchedule-api/src/main/resources/application.properties).

#### **Attention

If changing the client side app port, remember to change the `cors.origin` in [`application.properties`](/MedSchedule-api/src/main/resources/application.properties).
