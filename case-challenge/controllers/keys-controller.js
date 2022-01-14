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
                return res.status(500).json({ msg: 'Request Parameters are not assigned.' });
            }

            // Check if date values are match with YYYY-MM-DD format
            let areDateParametersValid = Utils.isDateFormatSupported({
                startDate: requestPayload.startDate,
                endDate: requestPayload.endDate
            });
            if (!areDateParametersValid) {
                return res.status(500).json({ msg: 'Date formats are not supported.'});
            }
            
            let keysService = new KeysService();
            let responseObject = await keysService.getKeysResponse(requestPayload);

            res.status(200).send(JSON.stringify(responseObject));
        } catch (error) {
            console.log(error);
        }
    };

}

module.exports.KeysController = KeysController;