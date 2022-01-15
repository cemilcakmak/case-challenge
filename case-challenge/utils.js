/**
 * Util class for getir case challenge
 * Contains utilization functions
 * All operations except req/res data should implemented in here
 */

class Utils {

    /**
     * @param String value
     * @returns Int 
     */    
    static toNumber(value) {
        return parseInt(value);
    }

    /**
     * @param String value
     * @returns true if value is assigned
     */
    static assigned(value) {
        return value !== undefined || value != null;
    }

    /**
     * 
     * @param params contains date strings
     * @returns true if all properties in params object are supported
     * String formats should be YYYY-MM-DD
     * Day, Month, Year values should be acceptable.
     */
    static isDateFormatSupported(params) {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;

        for (let i = 0; i < Object.values(params).length; i++) {
            let dateValue = Object.values(params)[i];
            if (!regEx.test(dateValue)) {
                return false;
            }

            let dates = dateValue.split('-');
            let year = Utils.toNumber(dates[0]);
            let month = Utils.toNumber(dates[1]);
            let day = Utils.toNumber(dates[2]);
            // In this part day should be checked for each month with using a Date library.
            // Each month has different number of days, but not to do over engineering and restrictions
            // going to pass.
            if (year <= 0 ||
                (month <= 0 || month > 12) ||
                (day <= 0 || day > 31)) {
                return false;
            }
        }

        return true;
    };

    /**
     * @param params contains request parameters
     * @returns true if request has all needed parameters for function to get response
     */    
    static areRequestParametersAssigned(params) {
        for (let i = 0; i < Object.values(params).length; i++) {
            let param = Object.values(params)[i]; 
            if (!Utils.assigned(param)) {
                return false;
            }
        }
        
        return true;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}

module.exports.Utils = Utils;