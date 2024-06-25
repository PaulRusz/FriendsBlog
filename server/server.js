// Import modules
const express = require('express')
const mongoose = require('mongoose')

// Create an instance of Express
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB database
const db = require('./config/connection');