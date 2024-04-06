/*
 Useful articles:

 https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance

 https://googlechrome.github.io/samples/css-will-change-transform-rasterization/

 https://greensock.com/will-change

 https://dev.opera.com/articles/css-will-change-property/

 https://oreillymedia.github.io/Using_SVG/extras/ch19-performance.html
 */
const boxes = document.querySelectorAll('.js-box');
const runAnim = (node) => {
  const type = node.dataset.transform;
  let transformAnim;
  if(type === 'scale') {
     transformAnim = anime({
      targets: node,
      scale: 1.2,
      autoplay: false,
    });
  }
  if(type === 'scalex') {
     transformAnim = anime({
      targets: node,
      scaleX: 1.2,
      autoplay: false,
    });
  }
  if(type === 'scaley') {
    transformAnim = anime({
      targets: node,
      scaleY: 1.2,
      autoplay: false,
    });
  }
  if(type === 'translatex') {
    transformAnim = anime({
      targets: node,
      translateX: 20,
      autoplay: false,
    });
  }
  if(type === 'translatey') {
    transformAnim = anime({
      targets: node,
      translateY: 20,
      autoplay: false,
    });
  }
  if(type === 'rotate') {
    transformAnim = anime({
      targets: node,
      rotate: '360deg',
      easing: 'linear',
      autoplay: false,
    });
  }
  if(type === 'rotatex') {
    transformAnim = anime({
      targets: node,
      rotateX: '20deg',
      easing: 'linear',
      duration: 500,
      autoplay: false,
    });
  }
  if(type === 'rotatey') {
    transformAnim = anime({
      targets: node,
      rotateY: '20deg',
      easing: 'linear',
      duration: 500,
      autoplay: false,
    });
  }
  if(type === 'rotatez') {
    transformAnim = anime({
      targets: node,
      rotateZ: '20deg',
      easing: 'linear',
      duration: 500,
      autoplay: false,
    });
  }
  if(type === 'skewx') {
    transformAnim = anime({
      targets: node,
      skewX: '20deg',
      easing: 'linear',
      duration: 500,
      autoplay: false,
    });
  }
  if(type === 'skewy') {
    transformAnim = anime({
      targets: node,
      skewY: '20deg',
      easing: 'linear',
      duration: 500,
      autoplay: false,
    });
  }
  // row 2
  if(type === 'sr') {
    transformAnim = anime({
      targets: node,
      scale: 1.1,
      rotate: '50deg',
      autoplay: false,
      duration: 500,
      easing: 'linear',
    });
  }
  if(type === 'str') {
    transformAnim = anime({
      targets: node,
      scale: 1.1,
      translateX: 20,
      translateY: 20,
      rotate: '50deg',
      autoplay: false,
      duration: 500,
      easing: 'linear',
    });
  }
  if(type === 'srtsk') {
    transformAnim = anime({
      targets: node,
      scale: 1.1,
      translateX: 20,
      translateY: 20,
      rotate: '50deg',
      skewX: '20deg',
      autoplay: false,
      duration: 500,
      easing: 'linear',
    });
  }
  // row 3
  if(type === 'scale-top-left') {
    transformAnim = anime({
      targets: node,
      scale: 1.2,
      autoplay: false,
    });
  }
  if(type === 'scale-top-right') {
    transformAnim = anime({
      targets: node,
      scale: 1.2,
      autoplay: false,
    });
  }
  if(type === 'rotate-top-left') {
    transformAnim = anime({
      targets: node,
      rotate: '50deg',
      autoplay: false,
    });
  }
  if(type === 'rotate-top-right') {
    transformAnim = anime({
      targets: node,
      rotate: '50deg',
      autoplay: false,
    });
  }
  // row 4
  if(type === 'scale-bottom-left') {
    transformAnim = anime({
      targets: node,
      scale: 1.2,
      autoplay: false,
    });
  }
  if(type === 'scale-bottom-right') {
    transformAnim = anime({
      targets: node,
      scale: 1.2,
      autoplay: false,
    });
  }
  if(type === 'rotate-bottom-left') {
    transformAnim = anime({
      targets: node,
      rotate: '50deg',
      autoplay: false,
    });
  }
  if(type === 'rotate-bottom-right') {
    transformAnim = anime({
      targets: node,
      rotate: '50deg',
      autoplay: false,
    });
  }
  return (e) => {
    transformAnim.restart();
  };
}

Array.from(boxes).forEach(node => {
  node.addEventListener('click', runAnim(node))
});
