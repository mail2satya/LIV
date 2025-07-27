sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast",
    "liv/app/model/formatter"
], function (Controller, UIComponent, MessageToast, formatter) {
    "use strict";

    return Controller.extend("liv.app.controller.DeviceDetail", {
        formatter: formatter,

        onInit: function () {
            const oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("DeviceDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            this.getView().bindElement({
                path: "/Devices(" + oEvent.getParameter("arguments").objectId + ")"
            });
        },

        onNavBack: function () {
            const oHistory = sap.ui.core.routing.History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                UIComponent.getRouterFor(this).navTo("DeviceList", {}, true);
            }
        },

        onEdit: function () {
            MessageToast.show("Edit functionality to be implemented.");
            // Example: Navigate to an edit view or open an editable dialog
        },

        onDelete: function () {
            MessageToast.show("Delete functionality to be implemented.");
            // Example: Confirmation dialog and then delete
        }
    });
});