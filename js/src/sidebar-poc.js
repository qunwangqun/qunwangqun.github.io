var red = document.querySelector('.site-author-image');

function setProperty(time,op) {
  red.style.setProperty('--animation-time', time +'s');
  red.style.setProperty('opacity', op);
}

function changeAnimationTime() {
	var time = Math.random();
	var op = (Math.floor(Math.random() * 5 ) + 5)*0.1;
  setProperty(time,op);
}
red.onmouseover = function(){
	changeAnimationTime();
}