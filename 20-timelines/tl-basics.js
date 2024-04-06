const timeline = anime.timeline({
  autoplay: false,
  direction: 'normal',
  loop: 1,
  delay: 1000,
  duration: 500,
  easing: 'easeInOutSine',
  begin: () => {
    console.log('Tl start');
  },
  complete: () => {
    console.log('Tl end');
  },
});

const squareAnim = {
  targets: '.square',
  translateX: 200,
  begin: () => {
    console.log('sq begin')
  },
  complete: () => {
    console.log('sq end');
  }
};

const circleAnim = {
  targets: '.circle',
  translateY: 200,
  duration: 1000,
  easing: 'linear',
  offset: 500,
  begin: () => {
    console.log('circle begin');
  },
  complete: () => {
    console.log('circle end');
  }
};

timeline
  .add(squareAnim)
  .add(circleAnim);













document.querySelector('#play-btn').addEventListener('click', timeline.play);
document.querySelector('#restart-btn').addEventListener('click', timeline.restart);
document.querySelector('#reverse-btn').addEventListener('click', () => {
  timeline.reverse();
  timeline.play();
});
