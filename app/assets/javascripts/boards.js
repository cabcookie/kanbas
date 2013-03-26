$(document).ready(function() {
	var drawing = false;
	var kanb = $('#kanban-board');
	var doc = $(document);
	var ctx = null;
	var mouse = false;
	
	if ("onmousedown" in window) mouse = true;
	
	if (mouse) {
		doc.on("mouseup", stopDraw);
		kanb.on("mousedown", initializeDraw);
	} else {
		doc.on("touchend", stopDraw);
		kanb.on("touchstart", initializeDraw);
	}
	
	$('#board-details-form').submit(function() {
		if (kanb) {
			$('#board_image').val(kanb[0].toDataURL());
			return img.val();
		} else {
			return false;
		}
	});
	
	function initializeDraw (e) {
		if (kanb[0].getContext) {
			ctx = kanb[0].getContext('2d');
			ctx.lineWidth = 3;
			ctx.strokeStyle = 'rgb(50,50,50)';
			ctx.lineCap = 'round';
			ctx.beginPath();
			var point = getXY(e);
			ctx.moveTo(point.x, point.y);
			ctx.stroke();
			drawing = true;
			if (mouse) {
				kanb.on("mousemove", draw);
			} else {
				kanb.on("touchmove", draw);
			}
			return false;
		}
	}
	
	function stopDraw(e) {
		if (drawing) {
			drawing = false;
			ctx.closePath();
			e.preventDefault();
			kanb.on("mousemove", null)
		}
	}
	
	function draw(e) {
		if (drawing) {
			var point = getXY(e);
			ctx.lineTo(point.x, point.y);
			ctx.stroke();
			return false;
		}
	}
	
	function getXY(e) {
		if (e.touches) {
			e = e.touches[0];
		};
		if (e.offsetX) {
			return { x: e.offsetX, y: e.offsetY };
		} else if (e.layerX) {
			return { x: e.layerX, y: e.layerY };
		} else {
			return { x: e.pageX - kanb[0].offsetLeft, y: e.pageY - kanb[0].offsetTop };
		};
	}
});