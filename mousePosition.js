var x;
var y;
var width = $(document).width();
var height = $(document).height();

$(document).mousemove(function(e) {
    x = e.pageX;
    y = e.pageY;
    percent();
});

function percent(){
	var horizontal =  Math.round(x*100/width);
	var vertical = Math.round(y*100/height);
	console.log("horizontal:" + horizontal);
	console.log("vertical:" + vertical);
}
