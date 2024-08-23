sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
],
function (Controller, ODataModel) {  // Corrected the order of parameters
    "use strict";

    return Controller.extend("com.pro.project1.controller.View1", {
        onInit: function () {
            // Get the model from the view
            var oModel = this.getView().getModel();

            if (!oModel) {
                // Log an error if the model is not set on the view
                console.error("Model is not set on the view.");
                return;
            }

            // Read data from the "Products" entity set
            oModel.read("/Products", {
                success: function (oData) {
                    console.log(oData.results); // Process the fetched data here
                },
                error: function (oError) {
                    console.error(oError); // Handle the error here
                }
            });
        }
    });
});
