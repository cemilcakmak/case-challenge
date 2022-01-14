const express = require('express');
const router = express.Router();

const { KeysController } = require('../controllers/keys-controller');

function init(app) {
    app.use('/get-keys', (req, res) => new KeysController().getKeys(req, res));
}

module.exports = init;