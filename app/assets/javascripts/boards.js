$(document).ready(function() {
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
			lPoi[0] = getCoords(e.touches[0]);
		}
		else {
			lPoi[0] = getCoords(e);
			kanb.onmousemove = drawMouse;
		}
		return false;
	}
	
	function stopDraw(e) {
		e.preventDefault();
		ctxt.closePath();
		kanb.onmousemove = null;
	}
	
	function drawMouse(e) {
		if (e.touches) {
			lPoi[0] = getCoords(e.touches[0]);
		}
		else {
			var p = getCoords(e);
			lPoi[0] = drawLine(lPoi[0].x, lPoi[0].y, p.x, p.y);
		}
		ctxt.stroke();
		//ctxt.closePath();
		//ctxt.beginPath();
		return false;
	}
	
	function drawLine(sX, sY, eX, eY) {
		ctxt.moveTo(sX, sY);
		ctxt.lineTo(eX, eY);
		return { x: eX, y: eY };
	}
	
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
});

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