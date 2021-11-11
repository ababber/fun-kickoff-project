## Loving Sitter

A website that helps dog owners find a dog sitter in real time.

**Tech Stack:** MongoDB, Express.js, React.js, Node.js, Typescript

**Contributors**: Ankit Babber

---

### Getting Started

1. Clone or download repository

---

## Server

1. Go into the server directory `cd server`
2. Run `npm install` to install packages
3. Create your environment variable (.env) file
4. Run `npm run dev` to start the server

---

## Client

1. Go into the client directory `cd client`
2. Run `npm install` to install packages
3. Run `npm start` to start the client side

---

### Demo

1. Registration. Users will be able to create a new account using their email and password

![Signup Demo](demo/images/signup.png)

2. Dashboard. Here is a description about what a user can expect to see

![Dashboard](demo/images/dashboard.png)

---

### How To Run Back-end Tests 

1. Go into the server directory `cd server`
2. Ensure your local .env file is setup correctly
3. Open the package.json file in the server directory
4. In the package.json file, add your local .env file to the test script: "DOTENV_CONFIG_PATH=`your_local.env` mocha -r dotenv/config ./test/*.test.js"
5. Run `npm run test` to start the tests while in the server directory

---