/**
 * Enum for getir response codes
 * @readonly
 */

const ResponseCodes = Object.freeze({
    SUCCESS: { code: 0, msg: 'Success' }, 
    NO_DATA_FOUND: { code: 1, msg: 'No Data Found' },
    DB_ERROR: { code: 2, msg: 'Database Error' },
    BAD_REQUEST: { code: 3, msg: 'Bad Request. Invalid Parameters.' },
    INTERNAL_SERVER_ERROR: { code: 4, msg: 'Internal Server Error' }
});

module.exports = ResponseCodes;