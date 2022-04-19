"use strict";

const express = require('express');
const app = express()
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv').config();
const helmet = require("helmet");
const connectDB = require('./db');
const exampleRoutes = require("./routes/exampleRoutes");

connectDB();

// using middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());


app.use("/example", exampleRoutes);

app.get("/", (req, res) => res.json("Welcome to the example"));


app.use((err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
});








module.exports = app;