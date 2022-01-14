require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./db/connect');

// Getir Case Challenge Router
const keysRouter = require('./routes/keys-router');

// Exception Handling
const endpointIsNotFound = require('./middleware/not-found');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Initial Endpoint For Getir Case Study Challenge.');
});

keysRouter(app);

app.use(endpointIsNotFound);

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

start();