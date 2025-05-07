window.onload = function () {
    var animation = lottie.loadAnimation({
        container: document.getElementById('logs'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://itsdenji777.github.io/lottie/Logs.json'
    });

    document.getElementById('logs').addEventListener('mouseenter', function () {
        animation.play();
    });

    document.getElementById('logs').addEventListener('mouseleave', function () {
        animation.stop();
    });
};