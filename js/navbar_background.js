$(document).ready(function(){

	$(window).scroll(function(){
		if($(window).scrollTop()>20){
			$('#navbar').removeClass('navbar-transparent').addClass('navbar-grey');
			$('#mobile-navbar').removeClass('navbar-transparent').addClass('navbar-grey');
		}else{
			$('#navbar').removeClass('navbar-grey').addClass('navbar-transparent');
			$('#mobile-navbar').removeClass('navbar-grey').addClass('navbar-transparent');
		}

	})

});