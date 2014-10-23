//GLOBALS
var APP = require("core");
var CONFIG = arguments[0];
var audioPlayer = {};

//FUNCTIONS
var init = function() {
	APP.log("debug", "wuwm.init | " + JSON.stringify(CONFIG));
	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary || "#000");

	if(CONFIG.isChild === true) {
		$.NavigationBar.showBack();
	} else if(APP.Settings.useSlideMenu) {
		$.NavigationBar.showMenu();
	} else {
		$.NavigationBar.showSettings();
	}

	audioPlayer = Ti.Media.createAudioPlayer({
		url: "http://pubint.ic.llnwd.net/stream/pubint_wuwm",
		allowBackground: true,
		allowsAirPlay: true,
		allowBackground: true
	});

};

//EVENTS
$.streamToggleButton.addEventListener("click", function(e) {
	if(audioPlayer.playing) {
		audioPlayer.pause();
		$.streamToggleButton.image = "/images/play.png";
	} else {
		audioPlayer.start();
		$.streamToggleButton.image = "/images/pause.png";
	}
});

$.schedule.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "http://wuwm.com/schedule/week",
		isChild: true
	});
});

$.news.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "http://wuwm.com/topic/regional-news",
		isChild: true
	});
});

//BOOTSTRAP
init();