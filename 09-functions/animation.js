/* Function-based Values */
// ==========================
const myAnim = anime({
  targets: '.js-box',
  autoplay: false,

  duration: setDuration,
  delay: setDelay,

  translateX: {
    value: [xInitial, xPosRelative],
    duration: 1000,
  },
  scale: 0.5,
});


/* function values */
// ======================
function xPosAbsolute(node, index) {
  /*
   i = 0 => 100
   i = 1 => 200
   */
  return (index * 100) + 100;
}

function xPosRelative(node, index) {
  /*
   i = 0 => +=100
   i = 1 => +=200
   */
  return '+=' + ((index * 100) + 100);
}

function xInitial(node, index) {
  /*
    i = 0 => 50
    i = 1 => 100
   */
  return (index * 50) + 50;
}

function setDuration(node, index) {
  // i = 0 => 500ms
  // i = 1 => 1000ms
  return index * 500 + 500;
}

function setDelay(node, index) {
  // i = 0 => 0ms
  // i = 1 => 1000ms
  return index * 1000;
}
