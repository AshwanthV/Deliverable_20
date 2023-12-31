var video = document.querySelector("#player1");
// video volume
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.getElementById("player1")
	video.autoplay = false;
	video.loop = false;
	video.muted = false;

});

const pausebutton = document.getElementById("pause");
const volume = document.getElementById("slider");
const speedUpButton = document.getElementById("faster");
const slowDownButton = document.getElementById("slower");
const skipButton = document.getElementById("skip");
const muteButton = document.getElementById("mute");
const volumeSlider = document.getElementById("slider");

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").innerHTML = Math.round(video.volume * 100) + "%";
	console.log("Play Video");
});

pausebutton.addEventListener("click",function() {
	video.pause();
	console.log("Pause Video");
});

slowDownButton.addEventListener("click",function(){
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

speedUpButton.addEventListener("click",function() {
	video.playbackRate *= (10 / 9);
	console.log(video.playbackRate);
});

skipButton.addEventListener("click",function() {
	if(video.currentTime + 10 <= video.duration) {
		video.currentTime += 10;
		console.log(video.currentTime);
	}
	else {
		video.currentTime = 0;
		console.log(video.currentTime);
	}
});

muteButton.addEventListener("click",function() {
	if(video.muted) {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.getElementById("slider").addEventListener("click",function() {
	console.log("changing volume");
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = this.value + "%";
});

document.getElementById("vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click",function() {
	video.classList.remove("oldSchool");
});






//pclick,function, 
