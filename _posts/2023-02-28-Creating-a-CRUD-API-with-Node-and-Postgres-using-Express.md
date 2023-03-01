---
layout: post
published: true
---

<a name="readme-top"></a>

# prerequisites

1. Node
2. Postgresql
3. Postico

# steps to complete

1. [Setup](#setup)
    - create a database in Postgres
    - create a table in the database
    - add 2 users with name and email as dummy data
2. [Initialize](#initialize)
3. [Install](#install)
4. [Create](#create) an `index.js`
    - require the `express` module
    - require the `body-parser` middleware (baked in)
    - Invoke Express to create the application server
    - define the port constant to listen to a specific channel
    - Invoke `#use` on the `app` server to parse JSON and do some fancy urlencoding (these details are hazy, and probably boring)
    - Write the first route for the root file, with an arrow function
    - Write an arrow function to listen for incoming HTTP requests, and add some command line output to verify it's working
5. Test everything is working
6. [Connect](#connect) to Postico from Node.js, using the `node-postgres` package (docs can be found [here](https://node-postgres.com/))
    - Create the `queries.js` file
    - Create a "pool" of connections: make this Postico specific
7. [Write](#write) routes that'll enable interfacing with the database with route: function combo
    - GET all users with getUsers()
    - GET single user with getUserById()
    - POST single user with createUser()
    - PUT single user with updateUser()
    - DELETE single user with deleteUser()
8. [Export](#export) the methods from `queries.js`
9. [Import](#import)/require the methods to `index.js`
10. Verify via Postman


# setup

```sql
CREATE DATABASE node_api;
```

```sql
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
)
```

```sql
INSERT INTO users (name, email)
  VALUES ('Jerry', 'jerry@example.com'), ('George', 'george@example.com');
```

```sql
SELECT * FROM users;
```

summary:
- This creates the database, adds a table, inserts two records and then verifies things are correct

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Initialize

In whatever directory this app is going to be in, run the following:

```unix
npm init -y
```

summary:
 - this creates a `package.json` file in the directory and auto-populates the file with some boilerplate. leaving off the `-y` gives me some control

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Install

```
npm i express pg
```

summary:

-   `express` and `pg` are specific packages that are part of the Node.js eco-system. Give them a Goog.
-   This will also create a `package-lock.json` which seems similar to a `Gemfile.lock`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Create

And add the following:

```js
// index.js
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get("/", (request, response) => {
    response.json({ info: "Node.js, Express, and Postgres API" })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
```

now spin up the server, just to make sure it's working:

```
node index.js
=> App running on port 3000.
```

summary:

-   the first line requires the `express` package
-   the second line requires the `body-parser` package (part of Node.js by default)
-   Third line invokes Express
-   Fourth line determines the port the app is listening to
-   `app.use(bodyParser.json())` looks like it prepares to use JSON for requests and responses, though this is a guess
-   The next line also appears to be reading the URL, though again...guessing
-   `app.get` is like a barebones route in a route file, with a serialized response
-   `app.listen` spins up the server and app to listen for requests from the ether....

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Connect

```
touch queries.js
open queries.js
```

```js
const Pool = require("pg").Pool
const pool = new Pool({
    user: "me",
    host: "localhost",
    database: "node_api",
    password: "",
    port: 5432,
})
```

summary:

-   the first line requires the `node-postgresql` package installed earlier, and then invokes `Pool` (not sure what this does)
-   second line creates a `Pool` with some basic key/value pairs
-   I believe this is making my life easier, but I don't know how

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Write

```js
// Get all users
const getUsers = (request, response) => {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// Get a single user
const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// Create a new user (POST)
const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
        [name, email],
        (error, results) => {
            if (error) {
                throw error
            }
            response
                .status(201)
                .send(`User added with ID: ${results.rows[0].id}`)
        }
    )
}

// Update a user (PUT)
const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3",
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

// Delete a user
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}
```

summary:

- these steps make sense, though the flexibility with the language and syntax are missing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Export

```js
module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
```

summary:

- this seems to "gather" all the methods, and make them available in other files within the directory

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Import

```js
// index.js
const db = require('./queries')
```

```js
// index.js
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
```

summary:

- This requires the functions that were exported from `queries.js`
- This also creates the routes; so it's behaving like the routes file and Controller#action

<p align="right">(<a href="#readme-top">back to top</a>)</p>