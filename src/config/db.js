const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.DB_URL;

const databaseConnection = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log("Database Connected Successfully");
    } catch (e) {
        console.log(e);
        process.exit(1);
    };
};

module.exports = databaseConnection;