
var a_idx = 0;
jQuery(document).ready(function($) {
$("body").click(function(e) {
var a = new Array("你好","hello","안녕하세요","Guten Tag!","こんにちは");
var $i = $("<span></span>").text(a[a_idx]);
a_idx = (a_idx + 1) % a.length;
var x = e.pageX,
y = e.pageY;
$i.css({
"z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
"top": y - 20,
"left": x,
"position": "absolute",
"font-weight": "bold",
"color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
});
$("body").append($i);
$i.animate({
"top": y - 180,
"opacity": 0
},
1500,
function() {
$i.remove();
});
});
});