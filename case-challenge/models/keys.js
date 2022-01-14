const { json } = require('body-parser');
const mongoose = require('mongoose');

const KeysSchema = new mongoose.Schema(
    {
        __id: {
            type: String
        },
        key: {
            type: String
        },
        value: {
            type: String
        },
        createdAt: {
            type: Date
        },
        counts: [{
            type: Number
        }]
    }, { collection: 'records' }
);

module.exports = mongoose.model('Keys', KeysSchema);