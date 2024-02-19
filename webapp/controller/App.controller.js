sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("com.sap.mybankdetails.controller.App", {
            formatter: formatter,
            onInit: function () {
                /* Setting Global JSON Model */
                this._setGlobalModel();

                /* Checking browser language and setting the global resource model */
                this._setGlobalLanguage();

                /* Get user profile */
                this.getUserProfile();

            },
            /**
            * Open morebankdetails dialog fragment
            */
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

            /**
             * Closes morebankdetails dialog fragment
             */

            onCloseBankDetails: function () {
                this.byId("moreBankDetails").close();

            },
            /**
            * Load the user profile loacally - image is stored in images- profile.jpeg
            */
            getUserProfile: function () {
                let oProfileModel = new sap.ui.model.json.JSONModel(
                    { profile: sap.ui.require.toUrl("com/sap/mybankdetails/images/profile.jpeg") });
                this.getView().setModel(oProfileModel);
            },

            /**
             * Creates a message for a selection change event on the chart
             */
            onSelectionChanged: function (oEvent) {
                let oSegment = oEvent.getParameter("segment"),
                    oValue = oSegment.getValue(),
                    empSalary = this.getOwnerComponent().getModel("oBankDetails").getProperty("/empsalary"),
                    persentageVal = (oValue / empSalary) * 100;
                sap.m.MessageToast.show("The selection changed: " + oSegment.getLabel() + " " +
                    ((persentageVal > 50) ? "Critical" : "Moderate"));
            },

            /*
            * Set Global JSON Model
            */
            _setGlobalModel: function () {
                let oModel = this.getOwnerComponent().getModel("oBankDetails");
                this.getView().setModel(oModel);
            },
            /*
           * Set Global Language
           */
            _setGlobalLanguage: function () {
                var appLang, i18nModel;
                if (navigator.language == "es")
                    appLang = "i18n_es";
                else if (navigator.language == "en")
                    appLang = "i18n";
                else
                    appLang = "i18n";

                i18nModel = this.getOwnerComponent().getModel(appLang);
                this.getOwnerComponent().setModel(i18nModel, "i18n");
            }
        });
    });
