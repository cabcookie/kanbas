var kanb = null;
var ctxt = null;
var ease = 0.1;

window.onload = init;

function init(e) {
	kanb = document.getElementById("kanban-board");
	if (kanb.getContext) {
		ctxt = kanb.getContext('2d');
		ctxt.lineWidth = 3;
		ctxt.strokeStyle = "rgb(50,50,50)";
		ctxt.beginPath();
		
		kanb.onmousedown = startDraw;
		kanb.onmouseup = stopDraw;
		kanb.ontouchstart = startDraw;
		kanb.ontouchstop = stopDraw;
		kanb.ontouchmove = drawMouse;
	}
}

function startDraw(e) {
	var p = getCoords(e);
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
	ctxt.lineTo(p.x, p.y);
	ctxt.stroke();
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