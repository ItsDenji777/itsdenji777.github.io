document.addEventListener('DOMContentLoaded', function () {
    var animationContainer = document.getElementById('logs');

    if (animationContainer) {  // Check if the element actually exists
        var animation = lottie.loadAnimation({
            container: animationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'https://itsdenji777.github.io/lottie/Logs.json'
        });

        animationContainer.addEventListener('mouseenter', function () {
            animation.play();
        });

        animationContainer.addEventListener('mouseleave', function () {
            animation.stop();
        });
    } else {
        console.error("Element #logs not found. Double-check the HTML!");
    }
});