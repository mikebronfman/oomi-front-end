$( document ).ready(function() {

	$("#landing a.login").click(function ( event ) {
	  event.preventDefault();
	  $(this).hide();
	  $("nav form").fadeIn();
	});

});