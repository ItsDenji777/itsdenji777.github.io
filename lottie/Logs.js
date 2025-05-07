document.addEventListener('DOMContentLoaded', function () {
    var animationContainer = document.getElementById('logs');

    if (animationContainer) {
        var animation = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'https://itsdenji777.github.io/lottie/Logs.json'
        });

        var defaultFrame = 20; // Set the default frame number
        animation.goToAndStop(defaultFrame, true); // Set initial state

        animationContainer.addEventListener('mouseenter', function () {
            animation.stop(); // Make sure it's stopped before playing
            animation.play();
        });

        animationContainer.addEventListener('mouseleave', function () {
            animation.stop(); // Stop first to avoid conflicts
            animation.playSegments([animation.currentFrame, defaultFrame], true);
        });
    } else {
        console.error("Element #logs not found. Double-check the HTML!");
    }
});