const { Utils } = require('../utils');

const { KeysService } = require('../services/keys-service');

class KeysController {
    constructor(opts) {
    }

    async getKeys(req, res) {
        try {
            let requestPayload = req.body;

            // Check if parameters in the request body are assigned or not
            let isRequestValid = Utils.areRequestParametersAssigned({
                startDate: requestPayload.startDate,
                endDate: requestPayload.endDate,
                minCount: requestPayload.minCount,
                maxCount: requestPayload.maxCount
            });
            if (!isRequestValid) {
                return res.status(400).json({ msg: 'Bad Request: Request Parameters are not assigned.' });
            }

            // Check if date values are match with YYYY-MM-DD format
            let areDateParametersValid = Utils.isDateFormatSupported({
                startDate: requestPayload.startDate,
                endDate: requestPayload.endDate
            });
            if (!areDateParametersValid) {
                return res.status(400).json({ msg: 'Bad Request: Date formats are not supported.'});
            }
            
            let keysService = new KeysService();
            let keys = await keysService.getKeysResponse(requestPayload);

            let response = {
                code: 0,
                msg: 'Success',
                keys
            }
            res.status(200).send(response);
        } catch (error) {
            res.status(500).json({ msg: 'Internal Server Error: Something went wrong.' });
        }
    };

}

module.exports.KeysController = KeysController;