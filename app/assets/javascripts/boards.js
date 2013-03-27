var kanb = null;
var ctxt = null;
var points = Array();
var pos = 0;
var ease = 0.1;

window.onload = init;

function init(e) {
	kanb = document.getElementById("kanban-board");
	if (kanb.getContext) {
		ctxt = kanb.getContext('2d');
		
		kanb.onmousedown = startDraw;
		kanb.onmouseup = stopDraw;
		kanb.ontouchstart = startDraw;
		kanb.ontouchstop = stopDraw;
		kanb.ontouchmove = drawMouse;
	}
}

function startDraw(e) {
	var p = getCoords(e);
	pos = 0;
	points[pos] = p;
	ctxt.lineWidth = 2;
	ctxt.strokeStyle = "rgb(50,50,50)";
	// This is used to have a nice anti aliasing
	ctxt.translate(0.5, 0.5);
	ctxt.beginPath();
	ctxt.moveTo(p.x, p.y);
	kanb.onmousemove = drawMouse;
	return false;
}

function stopDraw(e) {
	e.preventDefault();
	kanb.onmousemove = null;
}

function drawMouse(e) {
	var p = getCoords(e);
	pos += 1;
	points[pos] = p;
	if (pos == 4) {
		points[3] = { x: ((points[2].x+points[4].x)/2.0), y: ((points[2].y+points[4].y)/2.0) };
		ctxt.bezierCurveTo(points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);
		ctxt.stroke();
		points[0] = points[3];
		points[1] = points[4];
		pos = 1;
	}
	return false;
}

function getCoords(e) {
	if (e.touches) {
		e = e.touches[0];
	}
	if (e.offsetX) {
		return { x: e.offsetX, y: e.offsetY };
	}
	else if (e.layerX) {
		return { x: e.layerX, y: e.layerY };
	}
	else {
		return { x: e.pageX - kanb.offsetLeft, y: e.pageY - kanb.offsetTop };
	}
}

$(document).ready(function() {
	var kanb = $('#kanban-board');
	var doc = $(document);
	var ctx = null;
	var mouse = false;
	
	$('#board-details-form').submit(function() {
		if (kanb) {
			var img = $('#board_image');
			img.val(kanb[0].toDataURL());
			return img.val();
		} else {
			return false;
		}
	});
});