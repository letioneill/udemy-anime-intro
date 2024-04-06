const boxAnim = anime({
  targets: '#js-box',
  easing: 'easeInOutSine',
  translateX: [
    {
      value: -100,
    },
    {
      value: 100,
    },
    {
      value: 0,
    }
  ],
  autoplay: false
});

const box2Anim = anime({
  targets: '#js-box2',
  autoplay: false,
  duration: 1000,
  easing: 'easeInOutSine',
  translateX: [
    {value: '+=100'},
    {value: '+=0'}
  ],
  translateY: [
    {value: '+=0'},
    {value: '+=100'}
  ]
})

document.querySelector('#js-box').addEventListener('click', boxAnim.restart);
document.querySelector('#js-box2').addEventListener('click', box2Anim.restart);
