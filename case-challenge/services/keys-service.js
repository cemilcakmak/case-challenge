const { Utils } = require('../utils');
const Keys = require('../models/keys')

class KeysService {
    constructor() {
    }

    async getKeysResponse(requestPayload) {
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
    }

}
module.exports.KeysService = KeysService;