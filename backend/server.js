// entry point to server
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();
const app = express();

// To get body data from the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler); // override the default error handler

// Goal Route
// app.get('/api/goals', (req, res) => {
//   res.json({ message: 'get goals' });
// });
console.log(`Env uri coming back ${process.env.MONGO_URI}`.red);
app.listen(port, () => console.log(`Server started on port ${port}`));
