$(document).ready(function () {
  var $display = $("#stopWatchDisplay");
  var $startStop = $("#stopWatchStartStop");
  var $reset = $("#stopWatchReset");
  var timeVar, startTime;
  $startStop.on("tap", function () {
  	if($startStop.hasClass('stop')) {
  		startTime = $.now();
  		timeVar = setInterval(updateTimer, 200);
  		$startStop.text("Stop");
  	} else {
  		clearInterval(timeVar);
  		$startStop.text("Start");
  	}
  	$startStop.toggleClass("stop start");
  });
  $reset.on("tap", function () {
  	if($startStop.hasClass('start')) {
  		$startStop.trigger("tap");
  	}
  	$display.val("");
  });
  var updateTimer = function () {
  	var currentTime = $.now();
  	$display.val(formatTime(currentTime - startTime));
  };
  var formatTime = function(timeDiff) {
		var totalSec = timeDiff / 1000;
		var hours = parseInt( totalSec / 3600 ) % 24;
		var minutes = parseInt( totalSec / 60 ) % 60;
		var seconds = totalSec % 60;
		var finalTimeString = "";
		if(hours > 0) {
			if(minutes < 10) {
				minutes = "0" + minutes;
			}
			if(seconds < 10) {
				seconds = "0" + seconds.toFixed(3);
			} else {
				seconds = seconds.toFixed(3);
			}
			finalTimeString += hours + ":" + minutes + ":" + seconds;
		} else if(minutes > 0) {
			if(seconds < 10) {
				seconds = "0" + seconds.toFixed(3);
			} else {
				seconds = seconds.toFixed(3);
			}
			finalTimeString += minutes + ":" + seconds;
		} else if(seconds > 0) {
			finalTimeString += seconds.toFixed(3);
		}
		return finalTimeString;
  };
});