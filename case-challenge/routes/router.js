const express = require('express');
const router = express.Router();

const { GetirChallengeController } = require('../controllers/getir-challenge-controller');

function init(app) {
    app.use('/get-keys', (req, res) => new GetirChallengeController().getKeys(req, res));
}

module.exports = init;