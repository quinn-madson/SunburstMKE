//GLOBALS
var APP = require("core");
var CONFIG = arguments[0];
var audioPlayer = {};

//FUNCTIONS
var init = function() {
	APP.log("debug", "radio_milwaukee.init | " + JSON.stringify(CONFIG));
	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary || "#000");

	if(CONFIG.isChild === true) {
		$.NavigationBar.showBack();
	} else if(APP.Settings.useSlideMenu) {
		$.NavigationBar.showMenu();
	} else {
		$.NavigationBar.showSettings();
	}

	audioPlayer = Ti.Media.createAudioPlayer({
		url: "http://radiomilwaukee.streamguys.net/live",
		//url: "http://pubint.ic.llnwd.net/stream/pubint_wuwm",
		allowBackground: true,
		allowsAirPlay: true,
		allowBackground: true
	});

};

//EVENTS
$.streamToggleButton.addEventListener("click", function(e) {
	if(audioPlayer.playing) {
		audioPlayer.pause();
		//$.streamToggleButton.title = "Play";
		$.streamToggleButton.image = "/images/play.png";
	} else {
		audioPlayer.start();
		//$.streamToggleButton.title = "Pause";
		$.streamToggleButton.image = "/images/pause.png";
	}
});

$.playlist.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "http://www.radiomilwaukee.org/playlist/",
		isChild: true
	});
});

$.soundCloud.addEventListener("click", function(e) {
	APP.addChild("web", {
		url: "https://soundcloud.com/radiomilwaukee",
		isChild: true
	});
});

//BOOTSTRAP
init();