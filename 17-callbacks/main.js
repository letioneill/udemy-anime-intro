anime({
  targets: '#circle',
  scale: 2,
  easing: 'linear',
  duration: 1000,
  delay: 1000,
  begin: () => {
    console.log('Begin, delay is finished');
    anime({
      targets: '#circle',
      opacity: 1,
      easing: 'linear',
      duration: 1000,
    });
  },
  complete: () => {
    console.log('Animation end');
    anime({
      targets: '#circle',
      translateX: 200,
      scale: '+=0'
    });
  },
  update: () => {
    // console.log('frame');
  },
  run: () => {
    console.log('Run after delay, every frame');
  }
});
