const ballAnimation = {
  targets: '#ball',
  easing: 'linear',
  delay: 200,
  translateX: [
  {
    value: [-50, 500],
    duration: 1400,
  },
  ],
  translateY: [
  {
    value: [-70, 200],
    duration: 700,
  },
  {
    value: '-=130',
    duration: 700
  }
  ],
  rotate: [
  {
    value: '2turn',
    duration: 1400,
  },
  ]
};

const goalAnimation = {
  targets: '#goal',
  scale: {
    value: 1.5,
    duration: 2000,
    elasticity: 800,
  },
  opacity: {
    value: 1,
    duration: 300,
    easing: 'linear',
  },
  offset: '+=100' // 
};

const tl = anime.timeline({
  autoplay: false,
});

tl.add(ballAnimation)
.add(goalAnimation);

tl.play();
