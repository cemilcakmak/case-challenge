const { Utils } = require('../utils');
const Keys = require('../models/keys')

class KeysService {
    constructor() {
    }

    async getKeysResponse(requestPayload) {
        let keys = await Keys.find();
        console.log(keys);
    }

    /*
    {
            key: {
                $gt: requestPayload.minCount,
                $lt: requestPayload.maxCount
            },
            createdAt: {
                $gt: new Date(requestPayload.startDate).toISOString(),
                $lt: new Date(requestPayload.endDate).toISOString()
            }
        }
        */
}

module.exports.KeysService = KeysService;