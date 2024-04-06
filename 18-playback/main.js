const myAnim = anime({
  targets: '#circle',
  scale: 1.5,
  easing: 'linear',
  duration: 1000,
  autoplay: false,
});

const playBtn = document.querySelector('#js-play');
const replayBtn = document.querySelector('#js-replay');
const reverseBtn = document.querySelector('#js-reverse');
const pauseBtn = document.querySelector('#js-pause');

playBtn.addEventListener('click', myAnim.play);
replayBtn.addEventListener('click', myAnim.restart);
reverseBtn.addEventListener('click', () => {
  myAnim.reverse();
  myAnim.play();
});
pauseBtn.addEventListener('click', myAnim.pause);
