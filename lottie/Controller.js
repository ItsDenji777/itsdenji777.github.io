const animationContainer = document.getElementById('Controller')
const animation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop:false,
    autoplay:false,
    path: 'https://itsdenji777.github.io/lottie/Controller.json'
});

animationContainer.addEventListener('click', () => {
    animation.play();
});