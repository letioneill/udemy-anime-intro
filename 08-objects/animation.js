/* Object Values */
// ==========================
const myAnim = anime({
  targets: '.js-box',
  autoplay: false,
  duration: 1500,
  delay: 500,
  easing: 'easeInOutElastic',

  translateX: {
    value: [600, 200],
    duration: 500,
    easing: 'linear',
    delay: 0,
  },
  scale: 0.5,
  borderRadius: '50%',
});
