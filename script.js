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
rotate: -7,
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box2',
translateY: [-30, 25, 2050],
rotate: 10,
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box3',
translateX: [30, -25, 950],
rotate: -10,
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box4',
translateY: [20, -10, 950],
rotate: -20,
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box5',
translateX: [30, 50, 950],
rotate: 30,
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box6',
translateY: [-30, 20, 950],
rotate: 13,
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box7',
translateY: [20, 50, 1000],
rotate: 10,
duration: 4000,
endDelay: 1000,
 direction: 'alternate',
});
anime({
targets: '.box8',
translateX: [-20, 50, 950],
rotate: -15,
duration: 4000,
endDelay: 1000,
direction: 'alternate',
});

$(function(){
			$("#blinkingCircle").hide();
			setTimeout(function(){$("#blinkingCircle").show();setInterval(function(){$("#blinkingCircle").toggle();},500)},3000);
		});
// anime({
//   targets: '.background',
//   width: '1%', // -> from '28px' to '100%',
//   easingY: 'easeInOutQuad',
//   direction: 'alternate',
//   loop: true,
// });
