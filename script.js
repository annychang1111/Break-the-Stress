var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
	var mobile = document.getElementById("mobile");
	mobile.innerHTML = "You are using a mobile browser.";
}
