/**
 * Service class to make Db operations
 * Each function that is implemented in here should be responsible for one operation.
 * Each function returns a valid response objects that contains only data 
 */

const { Utils } = require('../utils');
const Keys = require('../models/keys')

class KeysService {
    constructor() {
    }

    async getKeysResponse(requestPayload) {
        try {
            let dbResult = await Keys.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: new Date(requestPayload.startDate),
                            $lte: new Date(requestPayload.endDate)
                }}},
                {
                    $project: {
                        key: "$key",
                        createdAt: "$createdAt",
                        totalCount: { "$sum": "$counts" }
                }},
                {
                    $match: {
                        totalCount: {
                            $gte: requestPayload.minCount,
                            $lte: requestPayload.maxCount
                }}}]);
    
            if (dbResult.length == 0) {
                return [];
            }
            let keys = dbResult.map(entity => {
                return {
                    key: entity.key,
                    createdAt: entity.createdAt,
                    totalCount: entity.totalCount
            }});
                    
            return keys;
        } catch (error) {
            return null;
        }
        
    }

}
module.exports.KeysService = KeysService;