const animationContainer2 = document.getElementById('Controller')
const animation2 = lottie.loadAnimation({
    container: animationContainer2,
    renderer: 'svg',
    loop:true,
    autoplay:false,
    path: 'https://itsdenji777.github.io/lottie/Controller.json'
});

animationContainer2.addEventListener('mouseenter', () => {
    animation2.play();
});


animationContainer2.addEventListener('mouseleave', () => {
    animation2.stop();
});