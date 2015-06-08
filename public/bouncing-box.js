(function(){ // This construction useful for scoping (look up Javascript IIFE for more information)
	'use strict'

	var box;
	var boardWidth;
	var update;
	var handleBoxClick;

	// jQuery stuff setup for you
	box = $('.box');
	boardWidth = $('.board').width();

	// TODO 2


	// TODO 3 / 4
	update = function() {

	};


	// TODO 5 / 6
	handleBoxClick = function() {

	};


	//this calls update every 50 milliseconds
	setInterval(update, 50);
	// this calls the handle handleBoxClick function every time the box is clicked on
	box.on('click', handleBoxClick);
}).call()
