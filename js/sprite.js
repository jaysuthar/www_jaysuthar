// JavaScript Document

$(function(){
		 
		   $('#cvfolio li a').append('<span class="hover"></span>')
		   
		   $('#cvfolio li a').hover(function() {
	        
		// Stuff that happens when you hover on + the stop()
		$('.hover', this).stop().animate({
			'opacity': 1
			}, 400,'easeOutSine')
	
	},function() {
	
		// Stuff that happens when you unhover + the stop()
		$('.hover', this).stop().animate({
			'opacity': 0
			}, 400, 'easeOutQuad')
	
	})
		   });