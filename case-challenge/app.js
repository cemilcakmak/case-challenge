require('dotenv').config();

const MONGODB_URI = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true';

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

// Getir Case Challenge Router
const challengeRouter = require('./routes/challenge-router');

// Exception Handling
const endpointIsNotFound = require('./middleware/not-found');

app.use(express.json());
challengeRouter(app);
app.use(endpointIsNotFound);

const port = process.env.PORT || 4000;
const start = async () => {
    try {
        await connectDB(MONGODB_URI);
        app.listen(port, console.log(`Server is listening at port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();

module.exports = app;