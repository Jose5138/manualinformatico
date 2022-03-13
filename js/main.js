$(document).ready(function () {
	//funcion de bootstrap popover
	$(function () {
		$('.example-popover').popover({
			container: 'body'
		});
	});
//modal	
	var btn_emergente = document.getElementById('btn_emergente');
    		btn_emergente.addEventListener('click', modall, false);

  function modall() {
    var capa = $('#capa');
    var modal = $('#modal');
    var cerrar = $('#clouse');
    capa.css({
      visibility: 'visible'
    },500);
    modal.animate({
      top: '25%'
    },500);
    cerrar.click(function () {
      capa.css({
        visibility: 'hidden'
      },500);
      modal.animate({
        top: '-100%'
      },500);
    });
  }

  
	
	
	
	
	
	
	
	
	

}); // end ready
