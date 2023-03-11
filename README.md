# MOVIE APP

This repository contains the code for the Movie App Mobile App, web, and backend.

## Front-end

The front-end is a React app.

to run the front-end, run the following commands:

```bash
    cd frontend
    npm start
```

install npm packages if needed:

```bash
    cd frontend
    npm install
```

## Back-end

The back-end is a typescript express app.

to install the packages, run the following commands:

```bash
    cd backend
    npm install
```

before running the backend you need to create a .env file in the root of the backend folder with the following content:

```bash
    DATABASE_URL="mysql://username:password@localhost:3306/movie"
```

substitute the username and password with your own.

to compose the mysql database docker container, run the following commands:

```bash
    docker-compose up
```
To migrate database

```bash
    npx prisma migrate dev --name init
```

to run the back-end, run the following commands:

```bash
    cd backend
    npm start
```
