var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var acc = document.getElementById("acceleration");
var locat = document.getElementById("location");

if (isMobile) {
	var mobile = document.getElementById("mobile");
	mobile.innerHTML = "You are using a mobile browser.";
}

if (isMobile) {
	window.addEventListener('devicemotion', function(event) {
		acc.innerHTML = "acceleration: " + event.acceleration.x + ' m/s2';
  		console.log(event.acceleration.x + event.acceleratoin.y + event.acceleration.z + event.rotationRate.x);
	});
}
