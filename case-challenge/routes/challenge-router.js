const express = require('express');

const { KeysController } = require('../controllers/keys-controller');

function init(app) {
    app.post('/challenge/get-keys', (req, res) => new KeysController().getKeys(req, res));
}

module.exports = init;