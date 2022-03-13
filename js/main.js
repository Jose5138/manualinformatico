$(document).ready(function () {
	//funcion de bootstrap popover
	$(function () {
		$('.example-popover').popover({
			container: 'body'
		});
	});
	var link = document.querySelectorAll('#linkk');
        $(link).click(function () { 
		alert('Este Link está desactivado');
	});
	//animaciones con scroll reveal
	ScrollReveal().reveal('#animate1', { 
		delay: 500,
		scale:0
	});
	ScrollReveal().reveal('#animate2', { 
		delay: 1000,
		origin: 'right',
		distance: '50px'
	});	
}); // end ready
