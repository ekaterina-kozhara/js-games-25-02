let go = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  autoplay: false,
});

go
.add({
  targets: '.small-circle',
  left: {
    value: 400,
    duration: 5000,
  },
  rotate: 360,
})
.add({
  targets: '.big-circle',
  top: {
   value: 500,
   duration: 250,
   easing: 'linear',
 },
 rotate: {
   value: 360,
   duration: 800,
   easing: 'easeInOutSine'
 },
})

document.querySelector('.small-circle').onclick = go.restart;
