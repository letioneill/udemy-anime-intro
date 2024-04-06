const elasticAnim = anime({
  targets: '.ball',
  translateX: 300,
  rotate: '360deg',
  elasticity: 100,
  autoplay: false,
});

document.querySelector('#play')
.addEventListener('click', elasticAnim.restart);
