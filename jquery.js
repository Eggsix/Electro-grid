$(document).ready(function(){
	$('body').prepend('<div class="container"></div>');
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
	});
});