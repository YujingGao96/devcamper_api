const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/bootcamps')

dotenv.config({path: './config/config.env'});

const app = express();
app.use('/api/v1/bootcamps', routes);

const PORT = process.env.PORT || 8080;
app.listen(
    PORT,
    () => console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);