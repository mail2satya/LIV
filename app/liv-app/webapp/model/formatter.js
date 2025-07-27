sap.ui.define([], function () {
    "use strict";

    return {
        formatPrice: function (sValue) {
            if (sValue) {
                return parseFloat(sValue).toFixed(2);
            }
            return sValue;
        }
    };
});