const express = require('express');
const databaseConnection = require('./src/config/db');
const userRoutes = require('./src/routes/user.routes');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 2500;

app.use(express.json());
app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use('/api/v1/user', userRoutes);

app.listen(PORT, (req, res) => {
    databaseConnection();
    console.log(`Server is running on port ${PORT}`);
});