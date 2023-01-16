sap.ui.define([], function () {
    "use strict";
    return {

       /* 
        @param Number
        @ reutn Number
        * Formatting the display value of Donut chart
       */
        getPercentage: function (oValue){
            let empSalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
            persentageVal = (oValue / empSalary) * 100;
            return persentageVal;
        },
       
        
        /* 
        @param Number
        @ reutn Number
        * Formatting th Semantic color value of Donut chart
       */
        getState: function (oValue) {
            let empSalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
             persentageVal = (oValue / empSalary) * 100;
            if (persentageVal > 60) 
                return "Error";
             else if (persentageVal > 40) 
                return "Critical";
            else 
                return "Good";
        }
    };
});