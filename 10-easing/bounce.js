// https://github.com/AndrewRayCode/easing-utils
const easeOutBounce = (t) => {
  const scaledTime = t/1;
  if (scaledTime < (1/2.75 )) {
    return 7.5625 * scaledTime * scaledTime;
  } else if (scaledTime < (2/2.75)) {
    const scaledTime2 = scaledTime - (1.5/2.75);
    return (7.5625 * scaledTime2 * scaledTime2) + 0.75;
  } else if (scaledTime < (2.5/2.75)) {
    const scaledTime2 = scaledTime - (2.25/2.75);
    return (7.5625 * scaledTime2 * scaledTime2) + 0.9375;
  } else {
    const scaledTime2 = scaledTime - (2.625/2.75);
    return (7.5625 * scaledTime2 * scaledTime2) + 0.984375;
  }
};

anime.easings['easeOutBounce'] = easeOutBounce;

const bounceAnim = anime({
  targets: '.ball',
  duration: 1200,
  easing: 'easeOutBounce',
  translateY: 300,
  autoplay: false,
});


// another easing library
// https://github.com/d3/d3-ease



























document.querySelector('#play-bounce')
.addEventListener('click', bounceAnim.restart);
