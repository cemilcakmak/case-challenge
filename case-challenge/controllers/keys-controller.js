/**
 * Controller class to manage request data.
 * Checks if request is suitable to make operations in service class
 */

// npm packages
const StatusCodes = require('http-status-codes')

// project classes
const { Utils } = require('../utils');
const { KeysService } = require('../services/keys-service');

// enum
const ResponseCodes = require('../response-codes');

class KeysController {
    constructor(opts) {
    }

    async getKeys(req, res) {
        try {
            let requestPayload = req.body;
            let startDate = requestPayload.startDate;
            let endDate = requestPayload.endDate;
            let minCount = requestPayload.minCount;
            let maxCount = requestPayload.maxCount;

            // Check if parameters in the request body are assigned or not
            let isRequestValid = Utils.areRequestParametersAssigned({
                startDate: startDate,
                endDate: endDate,
                minCount: minCount,
                maxCount: maxCount
            });
            if (!isRequestValid) {
                return res.status(StatusCodes.BAD_REQUEST)
                .send({
                    code: ResponseCodes.BAD_REQUEST.code,
                    msg: ResponseCodes.BAD_REQUEST.msg,
                    keys: null
                });
            }

            // Check if date values are match with YYYY-MM-DD format
            let areDateParametersValid = Utils.isDateFormatSupported({
                startDate: requestPayload.startDate,
                endDate: requestPayload.endDate
            });
            if (!areDateParametersValid) {
                return res.status(StatusCodes.BAD_REQUEST)
                    .send({
                        code: ResponseCodes.BAD_REQUEST.code,
                        msg: ResponseCodes.BAD_REQUEST.msg,
                        keys: null
                    });
            }
            
            let keysService = new KeysService();
            let keys = await keysService.getKeysResponse(requestPayload);

            if (!Utils.assigned(keys)) {
                return res.status(StatusCodes.BAD_REQUEST)
                    .send({
                        code: ResponseCodes.INTERNAL_SERVER_ERROR.code,
                        msg: ResponseCodes.INTERNAL_SERVER_ERROR.msg,
                        keys: null
                    });
            }
            
            if (keys.length == 0) {
                return res.status(StatusCodes.NOT_FOUND)
                    .send({
                        code: ResponseCodes.NO_DATA_FOUND.code,
                        msg: ResponseCodes.NO_DATA_FOUND.msg,
                        keys: keys
                });
            }
    
            return res.status(StatusCodes.OK)
                .send({
                    code: ResponseCodes.SUCCESS.code,
                    msg: ResponseCodes.SUCCESS.msg,
                    keys: keys
            });
        } catch (error) {
            return res.status(StatusCodes.BAD_REQUEST)
            .send({
                code: ResponseCodes.INTERNAL_SERVER_ERROR.code,
                msg: ResponseCodes.INTERNAL_SERVER_ERROR.msg,
                keys: null
            });
        }
    };

}

module.exports.KeysController = KeysController;