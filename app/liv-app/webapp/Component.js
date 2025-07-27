sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"liv/app/model/models" // You'll create this later if needed for device model etc.
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("liv.app.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			// if (models) { // Uncomment if you create a separate models.js file
			// 	this.setModel(models.createDeviceModel(), "device");
			// }
		}
	});
});