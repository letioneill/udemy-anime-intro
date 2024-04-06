/* Using Targets */
// ===============

/* Single Html ELement */
const page = document.getElementById('page');

/* CSS Selector */
const circle = '.page #circle';

/* Html Collection */
const boxes = document.getElementsByClassName('js-box');

/* Query Selector: NodeList */
const allBoxes = document.querySelectorAll('.js-box');

const myAnim = anime({
  targets: [page, circle,boxes],
  scale: 1.3,
  autoplay: false,
});

console.log("played");



/* JavaScript Objects */
const meter = {
  progress: 0,
  colors: '0%',
};

const objAnim = anime({
  targets: meter,
  progress: 10,
  colors: '100%',
  easing: 'linear',
  round: 1,
  update: () => console.log(meter.progress, meter.colors),
  autoplay: false,
});