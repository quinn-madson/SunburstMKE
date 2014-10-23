//GLOBALS
var APP = require("core");
var CONFIG = arguments[0];
var audioPlayer = {};

//FUNCTIONS
var init = function() {
	APP.log("debug", "wmse.init | " + JSON.stringify(CONFIG));
	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary || "#000");

	if(CONFIG.isChild === true) {
		$.NavigationBar.showBack();
	} else if(APP.Settings.useSlideMenu) {
		$.NavigationBar.showMenu();
	} else {
		$.NavigationBar.showSettings();
	}

	audioPlayer = Ti.Media.createAudioPlayer({
		url: "http://wmse.msoe.edu:9000",
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

$.playlist.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "http://spinitron.com/radio/playlist.php?station=wmse",
		isChild: true
	});
});

$.blog.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "http://www.wmse.org/blog/",
		isChild: true
	});
});

//BOOTSTRAP
init();