var kanb = null;
var ctxt = null;
var lPoi = null;
var ease = 0.1;

window.onload = init;

function init(e) {
	kanb = document.getElementById("kanban-board");
	lPoi = Array();
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
	if (e.touches) {
		// Touch event
		for (var i = 1; i <= e.touches.length; i++) {
			lPoi[i] = getCoords(e.touches[i - 1]); // Get info for finger #1
		}
	}
	else {
		// Mouse event
		lPoi[0] = getCoords(e);
		kanb.onmousemove = drawMouse;
	}
	return false;
}

// Called whenever cursor position changes after drawing has started
function stopDraw(e) {
	e.preventDefault();
	kanb.onmousemove = null;
}

function drawMouse(e) {
	if (e.touches) {
		// Touch Enabled
		for (var i = 1; i <= e.touches.length; i++) {
			var p = getCoords(e.touches[i - 1]); // Get info for finger i
			lPoi[i] = drawLine(lPoi[i].x, lPoi[i].y, p.x, p.y);
		}
	}
	else {
		// Not touch enabled
		var p = getCoords(e);
		lPoi[0] = drawLine(lPoi[0].x, lPoi[0].y, p.x, p.y);
	}
	ctxt.stroke();
	ctxt.closePath();
	ctxt.beginPath();
	return false;
}

// Draw a line on the canvas from (s)tart to (e)nd
function drawLine(sX, sY, eX, eY) {
	ctxt.moveTo(sX, sY);
	ctxt.lineTo(eX, eY);
	return { x: eX, y: eY };
}

// Get the coordinates for a mouse or touch event
function getCoords(e) {
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