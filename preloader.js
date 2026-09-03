    // Optional JavaScript code if you want to add interactivity
// Set the duration for the preloader in milliseconds
var preloaderDuration = 3000; // 3 seconds

// Remove preloader after the specified duration
setTimeout(function() {
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("hidden");
}, preloaderDuration);