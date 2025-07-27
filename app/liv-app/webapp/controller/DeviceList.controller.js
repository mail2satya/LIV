sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
    "liv/app/model/formatter"
], function (Controller, Filter, FilterOperator, MessageToast, formatter) {
    "use strict";

    return Controller.extend("liv.app.controller.DeviceList", {
        formatter: formatter,

        onInit: function () {
            // Attach route matched handler
            this.getRouter().getRoute("DeviceList").attachPatternMatched(this._onObjectMatched, this);
        },

        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        _onObjectMatched: function () {
            // Optional: Refresh data when navigating back to the list
            this.byId("smartTableDevices").rebindTable();
        },

        onItemPress: function (oEvent) {
            const oRouter = this.getRouter();
            const oBindingContext = oEvent.getSource().getBindingContext();
            const sDeviceId = oBindingContext.getProperty("ID");
            oRouter.navTo("DeviceDetail", {
                objectId: sDeviceId
            });
        },

        onAddDevice: function () {
            MessageToast.show("Add device functionality to be implemented.");
            // Example: Navigate to a create view or open a dialog
            // this.getRouter().navTo("DeviceCreate");
        }
    });
});