/**
 * Controller for the settings credits screen
 *
 * @class Controllers.settings.credits
 * @uses core
 */
var APP = require("core");

/**
 * Initializes the controller
 */
$.init = function() {
	APP.log("debug", "settings.init");
	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary || "#000");
	$.NavigationBar.showMenu();
};

$.cjs.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "http://www.cjschmit.com/",
		isChild: true
	});
});

$.calling.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "http://en.wikipedia.org/wiki/The_Calling_(di_Suvero)",
		isChild: true
	});
});

$.logs.addEventListener("click", function(_event) {
	APP.log("debug", "settings @logs");

	APP.logSend();
});

// Kick off the init
$.init();