var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	
	    // Initialize the video element
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
    video.load();

    // Set initial volume
    document.getElementById("volume").innerText = video.volume * 100 + "%";
});

// Play Button
document.querySelector("#play").addEventListener("click", function () {
    video.play();
    document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
    console.log("Play Video");
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
    console.log("Pause Video");
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New speed is", video.playbackRate.toFixed(5));
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate /= 0.9; // reverse of 0.9 slowdown
    console.log("New speed is", video.playbackRate.toFixed(5));
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("Current location is", video.currentTime);
});

// Mute/Unmute
document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        this.innerText = "Mute";
        console.log("Unmuted");
    } else {
        video.muted = true;
        this.innerText = "Unmute";
        console.log("Muted");
    }
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.getElementById("volume").innerText = Math.round(video.volume * 100) + "%";
    console.log("Volume set to", video.volume);
});

// Old School
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
    console.log("Old School style applied");
});

// Original
document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
    console.log("Original style restored");

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

