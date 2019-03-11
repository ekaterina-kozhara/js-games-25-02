anime({
  targets: '.path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

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
