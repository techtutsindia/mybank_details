sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.mybankdetails.controller.App", {
            onInit: function () {

              

            },

            onOpenBankDetails: function () {
                //create dialog lazily

                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(

                        { name: "com.sap.mybankdetails.view.fragments.MoreDetails" }

                    );
                }

                this.moreBankDetails.then(
                    function (oDialog) {
                        oDialog.open();
                    });
            },


            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();

            }



        });
    });
