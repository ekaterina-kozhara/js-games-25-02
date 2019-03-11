var tl = anime.timeline({
  targets: '.piano, .water, .holi, .food, .waterfall, .redbaloon, .feetFlowers, .jump, .feet, .piano, .concert, .wine',
  delay: function(el, i) { return i * 200 },
  duration: 900,
  easing: 'easeOutExpo',
  direction: 'alternate'
});
tl
.add({
  translateY: 100,
  easing: 'spring',
  duration: 20
})
.add({
  targets: '.piano',
  rotate: 20,
  duration: 30
})
.add({
  targets: '.water',
  rotate: -15,
  duration: 30
})
.add({
  targets: '.holi',
  rotate: 20,
  duration: 30
})
.add({
  targets: '.waterfall',
  rotate: 20,
  duration: 30
})
.add({
  targets: '.food',
  rotate: -15,
  duration: 30
})
.add({
  targets: '.feetFlowers',
  rotate: 20,
  duration: 30
})
.add({
  targets: '.redbaloon',
  rotate: 20,
  duration: 30
})
.add({
  targets: '.jump',
  rotate: 20,
  duration: 30
})
.add({
  targets: '.feet',
  rotate: -15,
  duration: 30
})
.add({
  targets: '.concert',
  rotate: -15,
  duration: 30
})
.add({
  targets: '.feet',
  rotate: 20,
  duration: 30
})
.add({
  opacity: .0,
  scale: 1.1,
  duration: 30
})
.add({
  translateY: 0,
  scale: 1
});


anime({
  targets: '.path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 12000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  // loop: true
});

// anime({
//   targets: '.piano',
//   translateY: 100,
//   delay: anime.stagger(200, {start: 500}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.water',
//   translateY: 90,
//   delay: anime.stagger(200, {start: 600}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.holi',
//   translateY: 80,
//   delay: anime.stagger(200, {start: 700}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.food',
//   translateY: 50,
//   delay: anime.stagger(200, {start: 800}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.water',
//   translateY: 80,
//   delay: anime.stagger(200, {start: 900}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.waterfall',
//   translateY: 80,
//   delay: anime.stagger(200, {start: 1000}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.redbaloon',
//   translateY: 80,
//   delay: anime.stagger(200, {start: 1100}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.feetFlowers',
//   translateY: 90,
//   delay: anime.stagger(200, {start: 1100}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.jump',
//   translateY: 80,
//   delay: anime.stagger(200, {start: 1200}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });
// anime({
//   targets: '.feet',
//   translateY: 80,
//   delay: anime.stagger(200, {start: 1300}),
//   endDelay: 600,
//   direction: 'alternate',
//   loop: true
// });









// anime({
//   targets: '.path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 5000,
//   delay: function(el, i) { return i * 250 },
//   direction: 'alternate',
//   loop: true
// });

// anime({
// targets: '.holi',
// translateX: [-30, -10, 2050],
// rotate: -7,
// duration: 4000,
// endDelay: 1000,
//  direction: 'alternate',
// });
// anime({
// targets: '.food',
// translateY: [-30, 25, 2050],
// rotate: 10,
// duration: 4000,
// endDelay: 1000,
//  direction: 'alternate',
// });
// anime({
// targets: '.piano',
// translateX: [30, -25, 950],
// rotate: -10,
// duration: 4000,
// endDelay: 1000,
//  direction: 'alternate',
// });
// anime({
// targets: '.feetFlowers',
// translateY: [20, -10, 950],
// rotate: -20,
// duration: 4000,
// endDelay: 1000,
//  direction: 'alternate',
// });
// anime({
// targets: '.water',
// translateX: [30, 50, 950],
// rotate: 30,
// duration: 4000,
// endDelay: 1000,
//  direction: 'alternate',
// });
// // anime({
// // targets: '.box6',
// // translateY: [-30, 20, 950],
// // rotate: 13,
// // duration: 4000,
// // endDelay: 1000,
// //  direction: 'alternate',
// // });
// // anime({
// // targets: '.box7',
// // translateY: [20, 50, 1000],
// // rotate: 10,
// // duration: 4000,
// // endDelay: 1000,
// //  direction: 'alternate',
// // });
// // anime({
// // targets: '.box8',
// // translateX: [-20, 50, 950],
// // rotate: -15,
// // duration: 4000,
// // endDelay: 1000,
// // direction: 'alternate',
// // });
// // anime({
// // targets: '.box21',
// // translateX: [-20, 50, 2000],
// // rotate: -15,
// // duration: 4000,
// // endDelay: 1000,
// // direction: 'alternate',
// // });

$(function(){
			$("#blinkingCircle").hide();
			setTimeout(function(){$("#blinkingCircle").show();setInterval(function(){$("#blinkingCircle").toggle();},500)},3000);
		});
