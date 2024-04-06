const progressAnim = anime({
  targets: '.progress-meter',
  value: [0, 100],
  duration: 2000,
  easing: 'easeInOutSine',
  autoplay: false,
});

const inputAnim = anime({
  targets: '#progress-input',
  value: ['0%', '100%'],
  duration: 2000,
  easing: 'easeInOutSine',
  round: 1,
  autoplay: false,
});

document.querySelector('#download-btn')
.addEventListener('click', () => {
  [progressAnim, inputAnim].forEach(a => a.restart());
});
