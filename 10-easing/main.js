const boxes = document.querySelectorAll('.box');
const linAnim = (node) => anime({
  targets: node,
  translateX: 300,
  rotate: '360deg',
  easing: 'linear',
  duration: 2000,
  autoplay: false,
});

const sineInAnim = (node) => anime({
  targets: node,
  translateX: 300,
  rotate: '360deg',
  easing: 'easeInSine',
  duration: 2000,
  autoplay: false,
});

const sineOutAnim = (node) => anime({
  targets: node,
  translateX: 300,
  rotate: '360deg',
  easing: 'easeOutSine',
  duration: 2000,
  autoplay: false,
});

const sineInOutAnim = (node) => anime({
  targets: node,
  translateX: 300,
  rotate: '360deg',
  easing: 'easeInOutSine',
  duration: 2000,
  autoplay: false,
});

const customBezier = (node) => anime({
  targets: node,
  translateX: 300,
  rotate: '360deg',
  easing: [.77,-0.48,.4,1.07],
  duration: 2000,
  autoplay: false,
});

const runAnim = (node) => {
  let currentAnim = {};
  const type = node.dataset.easeType;

  if (type === 'linear') {
    currentAnim = linAnim(node);
  }
  else if (type === 'ease-in-sine') {
    currentAnim = sineInAnim(node);
  }
  else if (type === 'ease-out-sine') {
    currentAnim = sineOutAnim(node);
  }
  else if (type === 'ease-in-out-sine') {
    currentAnim = sineInOutAnim(node);
  } else if (type === 'ease-custom-bezier') {
    currentAnim = customBezier(node);
  }
  else {
    currentAnim = {};
  }
  return (e) => {
    currentAnim.restart();
  };
};

Array.from(boxes).forEach(node => {
  node.addEventListener('click', runAnim(node))
});

const playAllAnims = (btn) => {
  const animations = [
    linAnim('.box.linear'),
    sineInAnim('.box.sine-in'),
    sineOutAnim('.box.sine-out'),
    sineInOutAnim('.box.sine-in-out'),
    customBezier('.box.custom-bezier'),
  ];
  return (e) => {
    animations.forEach(a => a.restart());
  }
};

const playAllBtn = document.querySelector('#play-all')
playAllBtn.addEventListener('click', playAllAnims(playAllBtn));
