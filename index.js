const express = require("express");

/**
 * Impport database connection
 */
const { mongoose } = require("./db/mongo");

// Import Todos model and User model
const { Todos } = require("./model/todos");
const { User } = require("./model/user");

// Import todos api
const todos = require("./api/todos");

const app = express();

/**
 * set body parser as json and url encoded as true
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set router as middleware
app.use("/api/todos", todos);

/**
 * Assign environment variable or default port is 5000
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
