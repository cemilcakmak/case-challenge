class Utils {
    static toNumber(value) {
        return parseInt(value);
    }

    static assigned(value) {
        return value !== undefined || value != null;
    }

    static isDateFormatSupported(params) {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;
        Object.keys(params).forEach(key => {
            if (!params[key].match(regEx)) {
                return false;
            }

            let dates = params[key].split('-');
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
        });

        return true;
    };

    static areRequestParametersAssigned(params) {
        Object.keys(params).forEach(key => {
            if (!Utils.assigned(params[key])) {
                return false;
            }
        });

        return true;
    }

}

module.exports.Utils = Utils;