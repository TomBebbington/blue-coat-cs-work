'use strict';
hljs.initHighlightingOnLoad();
console.log($);
$(function () {
	'use strict';
	function equal(a, b) {
		for(var i = 0; i < a.length; i++) {
			if(a[i] != b[i]) {
				return false;
			}
		}
		return true;
	}
	var header = $("h1");
	var delay = 1000;
	var keys = new Uint8Array(11);
	var desiredKeys = new Uint8Array([65, 66, 39, 37, 39, 37, 40, 40, 38, 38]);
	var usedKeys = 0;
	$("html").keydown(function (event) {
		keys.set(keys.subarray(0, 10), 1);
		keys[0] = event.keyCode;
		if (equal(desiredKeys, keys)) {
			var width = document.body.getElementsByClassName("konami")[0].width;
			$(".konami").slideDown(400, function () {
				var self = this;
				var delay = 500 + Math.random() * 1000;
				var offset = Math.random() * window.innerHeight - width / 2;
				function to(x) {
					$(self).animate({
						left: x,
						top: window.scrollY + offset
					}, {
						easing: "linear",
						complete: x == 0 ? right : left,
						duration: delay
					});
				}
				function right() {
					to(window.innerWidth - width - 10);
				}
				function left() {
					to(0);
				}
				right();
			});
		}
	});
	$(".konami").hide();
  	var colorCycle = ["red", "green", "blue"];
  	var colorIndex = 0;
	function easeHeader() {
      	if(colorIndex + 1 >= colorCycle.length)
          colorIndex = 0;
		header.animate({
			color: colorCycle[colorIndex++]
		}, { duration: delay, complete: easeHeader });
	}
	easeHeader();
	$("#tabs").tabs();
	$("#click").click(function () {
		$("#click p").slideToggle();
	});
	$("#dblclick").dblclick(function () {
		$("#dblclick p").slideToggle();
	});
	$("#hover").hover(function () {
		$("#hover p").slideToggle();
	});
	$("#mousedown").mousedown(function () {
		$("#mousedown p").slideToggle();
	});
	$("#mouseup").mouseup(function () {
		$("#mouseup p").slideToggle();
	});
	$("#hide").click(function () {
		$("#hide p").hide();
	});
	$("#animate").click(function () {
		$("#animate p").animate({
			fontSize: '2em'
		});
	});
	$("#slide").click(function () {
		$("#slide p").slideToggle();
	});
});
