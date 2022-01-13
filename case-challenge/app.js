require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

const port = process.env.PORT || 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening at port ${port}`));
    } catch (error) {
        // will be replaced
        console.log(error);
    }
}

