sap.ui.define([], function () {
    "use strict";
    return {

        // custom logic
        getPercentage: function (oValue){
            let empSalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary");
            let persentageVal = (oValue / empSalary) * 100;
            return persentageVal;
        },
        
        getState: function (oValue) {
            let empSalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary");
            let persentageVal = (oValue / empSalary) * 100;
            if (persentageVal > 60) {
                return "Error";
            } else if (persentageVal > 40) {
                return "Critical";
            }
            else {
                return "Good";
            }

        }
    };
});