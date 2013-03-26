$(document).ready(function() {
	var drawing = false;
	var points = null;
	var kanb = $('#kanban-board');
	var doc = $(document);

	doc.mousedown(function(e) {});
	doc.mousemove(function(e) {
		if (drawing) {
			console.log(kanb);
		}
	});
	doc.mouseup(function(e) {});
	
	// whereever the mouse button is released stop drawing
	//doc.on("mouseup", stopDrawing);
	//doc.on("touchstop", stopDrawing);
	
	// start drawing if mouse is pressed or touch started inside the canvas
	//doc.on("mousedown", initDrawing);
	//doc.on("touchstart", initDrawing);
	
	// as long as mouse or finger is moved inside the canvas draw something
	//doc.on("touchmove", draw);
	
	$('#submit-board-data').submit(function() {
		var ctx = $('#kanban-board')[0].getContext('2d');
		$('#board_image').val(ctx.getImageData());
	});

	function initDrawing(e) {
		console.log('Initialize drawing');
		var kanb = $('#kanban-board')[0];
		var context = kanb.getContext('2d');
		context.lineWidth = 3;
		context.strokeStyle = '#444';
		context.beginPath();
		drawing = true;
		points = getCoords(e);
		return false;   // needed to prevent default action like scrolling
	}
	
	function stopDrawing(e) {
		console.log('Stop drawing');
		e.preventDefault();
		drawing = false;
	}
	
	function draw(e) {
		if (drawing) {
			console.log('Something to draw');
			var newP = getCoords(e);
			console.log(newP);
			var kanb = $('#kanban-board')[0];
			var context = kanb.getContext('2d');
			points = drawLine(context, points, newP);
			return false;
		} else {
			return true;
		}
	}
	
	// Get the coordinates for a mouse or touch event
	function getCoords(e) {
		console.log(e);
		var evt = e;
		console.log(evt);
		if (e.touches) {
			console.log('touch');
			evt = e.touches[0];
		}
		if (evt.offsetX) {
			console.log('offset');
			return { x: evt.offsetX, y: evt.offsetY };
		}
		else if (evt.layerX) {
			console.log('layer');
			return { x: evt.layerX, y: evt.layerY };
		}
		else {
			console.log('else');
			var kanb = $('#kanban-board')[0];
			console.log({ offTop: kanb.offsetTop, offLeft: kanb.offsetLeft, evtX: evt.pageX, evtY: evt.pageY, eX: e.pageX, eY: e.pageY });
			return { x: evt.pageX - kanb.offsetLeft, y: evt.pageY - kanb.offsetTop };
		}
	}
	
	// draw a line between to coordinates
	function drawLine(ctx, start, end) {
		var sx = start.x;
		var sy = start.y;
		var ex = end.x;
		var ey = end.y;
		
		ctx.moveTo(sx, sy);
		ctx.lineTo(ex, ey);
		ctx.stroke();
		ctx.closePath();
		ctx.beginPath();
		return { x: ex, y: ey };
	}	
});