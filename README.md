# MOVIE APP

This repository contains the code for the Movie App Mobile App, web, and backend.

# Front-end

The front-end is a React app.

Install npm packages.

```bash
    cd frontend
    npm install
```

Run the app.

```bash
    cd frontend
    npm start
```


# Backend API running step by step guide

## 1. Create a database
Install docker desktop and run the following command to create a mysql database

```bash
    docker-compose up
```

## 2. Create a .env file in the root of the backend folder with the following content:

```bash
    DATABASE_URL="mysql://username:password@localhost:3306/movie"
```

substitute the username and password with your own.

## 3. Install npm packages

```bash
    cd backend
    npm install
```

## 4. Migrate database

```bash
    npx prisma migrate dev --name init
```

## 5. Run the backend

```bash
    cd backend
    npm start
```

# Frontend test running step by step guide
## Some test can fail because project code is also broken

 Run frontend tests.

```bash
    cd MOVIES
    cd frontend
    npm run test
```