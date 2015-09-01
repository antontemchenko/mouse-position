var x;
var y;
var width = $(document).width();
var height = $(document).height();

$(document).mousemove(function(e) {
    x = e.pageX;
    y = e.pageY;
    deg();
});

function deg(){
	var horizontal =  Math.round(x*180/width);
	var vertical = Math.round(y*180/height);
	console.log("horizontal:" + horizontal);
	console.log("vertical:" + vertical);
}
