$(function(){
	// Nav Mobile
    $('.navbar-toggler').click(function(){
	    $('.navbar-collapse').toggleClass('right');
	    $('.navbar-toggler').toggleClass('indexcity');
    });

    // Search Form
    $('.fa-search').click(function(){
    	$('.input-group').toggleClass('input-open');
    });
});