$(document).ready(function(){
	$('body').prepend('<div class="container"></div>');
	$('.container').prepend('<button onclick="newGrid(); return false">New Grid</button>');
		for (i = 0; i < 16; ++i){
			$('.container').append('<tr></tr>');
		}
		for (j = 0; j < 16; ++j){
			$('tr').append('<td></td>')
		}
	$('td').css({
		height: '20px',
		width: '20px',
		border: '1px black solid',
		margin: '0 1px',
		'box-sizing': 'border-box'
	}).hover(function(){
		$(this).css('background-color', 'red');
	});
});
function newGrid() {
	$('.container').remove();
	$('body').append('<div class="container"></div>');
	$('.container').prepend('<button onclick="newGrid(); return false">New Grid</button>');

		var height = prompt("What height?");
		var width = prompt("What width?")
		for (i = 0; i < height; ++i){
			$('.container').append('<tr></tr>');
		}
		for (j = 0; j < width; ++j){
			$('tr').append('<td></td>')
		}
		$('td').css({
		height: '20px',
		width: '20px',
		border: '1px black solid',
		margin: '0 1px',
		'box-sizing': 'border-box'
	}).hover(function(){
		$(this).css('background-color', 'red');
	});
};