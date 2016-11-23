$(document).ready(function($){

	// handle no js
	$("#gallery ul").css("display","none");
	$("#gallery #loaderImg").css("display","block");
	
	// set image height
	var windowHeight = window.innerHeight;
	//alert(windowHeight);
	var imgHeight = windowHeight - 227;
	$('#imgView img').css('max-height', imgHeight);
	
	// set focus to name on contact page
	if($("#contactForm").length)
		document.forms["contactForm"]["name"].focus();


	// show nav on small layout	
	var linksVisible = 0;
	
	$("#moreOptions").click(function () {
		if(linksVisible == 0) {
			$("#small-links").css("display","block");
			linksVisible = 1;
		}
		else {
			$("#small-links").css("display","none");
			linksVisible = 0;
		}
	});
	
});

//------------------------
//
//  load thumbnail gallery
//
//------------------------
$(window).load(function($){
	showThumbs();
});

function showThumbs() {
	$("#gallery #loaderImg").css("display","none");
	$("#gallery ul").fadeIn();
};

//------------------------
//
//  Royal Slider
//
//------------------------
function sliderInit(p) {
	$('#gallery ul').css("display", "none");
	$('.royalSlider').css("display", "block");
	$(".royalSlider").royalSlider({
		startSlideId: p,
		keyboardNavEnabled: true,
		controlsInside: false,
		loop: true,
		allowCSS3: false,
		arrowsNav: true,
		autoScaleSlider: true,
		controlNavigation: 'none',
		fullscreen: {enabled: 'false'},
		arrowsNavHideOnTouch: true
	})
	
	// slide counter and fullscreen link
	var slider = $('.royalSlider').data('royalSlider');
	var slideCount = slider.currSlideId + 1;
	var fullScreenLink = '<a href="javascript:goToFullScreen();">view in fullscreen</a>';
	$('#slideCounter').html(slideCount + ' of 30' + fullScreenLink);
	
	// slide number change
	slider.ev.on('rsAfterSlideChange', function(event) {
		slideCount = slider.currSlideId + 1;
		$('#slideCounter').html(slideCount + ' of 30' + fullScreenLink);
	})
	
	// exit full screen
	slider.ev.on('rsExitFullscreen', function(event) {
		$(".rsDefault .rsFullscreenIcn").css("display", "none");
	})
}

function goToFullScreen() {
	var slider = $('.royalSlider').data('royalSlider');
	slider.enterFullscreen();
	$(".rsDefault .rsFullscreenIcn").css("display", "block");
}

//------------------------
//
// Enable small layout nav
//
//------------------------
var linksVisible = 0;

$("#moreOptions").click(function () {
	if(linksVisible == 0) {
		$("#small-links").css("display","block");
		linksVisible = 1;
	}
	else {
		$("#small-links").css("display","none");
		linksVisible = 0;
	}				
});

//------------------------
//
// Contact form shit
//
//------------------------

// validate contact form before submitting
function validate() {
	resetContact();
	var passed = "true";
	var n = document.forms["contactForm"]["name"].value;
	var e = document.forms["contactForm"]["email"].value;
	var m = document.forms["contactForm"]["message"].value;
	if(n == null || n == "") {
		$("#nMessage").text("required");
		passed = "false";
	}
	if(e == null || e == "") {
		$("#eMessage").text("required");
		passed = "false";
	}
	else {
		if(checkEmail(e) == false) {
			$("#eMessage").text("please enter a valid email address");
			passed = "false";
		}
	}
	if(m == null || m == "") {
		$("#mMessage").text("required");
		passed = "false";
	}
	if(passed == "false")
		return false;
	else
		return true;
}

function checkEmail(address) {
	var re = /\S+@\S+\.\S{3}/;
	return re.test(address);
}
function resetContact() {
	$("#nRequired").css("display","none");
	$("#eRequired").css("display","none");
	$("#mRequired").css("display","none");
}

// http://www.mediacollege.com/internet/javascript/form/limit-characters.html
function limitText() {
	var limitNum = 1000;
	var limitField = document.forms["contactForm"]["message"];
	var limitCount = document.forms["contactForm"]["countdown"];
	if (limitField.value.length > limitNum) {
		limitField.value = limitField.value.substring(0, limitNum);
	}
	else {
		limitCount.value = limitNum - limitField.value.length;
	}
}