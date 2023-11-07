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

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	video.volume = 1.0;
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





//pclick,function, 
