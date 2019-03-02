anime({
  targets: '.path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 9000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

anime({
targets: '.box1',
translateX: [-30, -10, 2050],
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box2',
translateY: [-30, 25, 2050],
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box3',
translateX: [30, -25, 950],
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box4',
translateY: [20, -10, 950],
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box5',
translateX: [30, 50, 950],
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box6',
translateY: [-30, 20, 950],
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box7',
translateY: [20, 50, 1000],
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box8',
translateX: [-20, 50, 950],
duration: 4000,
endDelay: 1000,
direction: 'alternate',
});

// anime({
//   targets: '.box1',
//   translateX: 270,
//   loop: 3,
//   easing: 'easeInOutSine'
// });
//
// anime({
//   targets: '.box2',
//   translateX: 270,
//   loop: true,
//   easing: 'easeInOutSine'
// });
//
// anime({
//   targets: '.box3',
//   translateX: 270,
//   loop: 3,
//   direction: 'reverse',
//   easing: 'easeInOutSine'
// });
//
// anime({
//   targets: '.box4',
//   translateX: 270,
//   direction: 'reverse',
//   loop: true,
//   easing: 'easeInOutSine'
// });
//
// anime({
//   targets: '.box5',
//   translateX: 270,
//   loop: 3,
//   direction: 'alternate',
//   easing: 'easeInOutSine'
// });
//
// anime({
//   targets: '.box6',
//   translateX: 270,
//   direction: 'alternate',
//   loop: true,
//   easing: 'easeInOutSine'
// });
