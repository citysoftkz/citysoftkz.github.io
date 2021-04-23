(function ($) {
	"use strict";
	
	/*----------------------------
    Responsive menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.responsive-menu',
	});
	
	/*----------------------------
    START - Menubar scroll animation
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 70) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.header li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 200);
		   return false;
		  }
		}
	});

	$(".primary-menu li a, a.scrool").on('click', function () {

		let full_url = this.href;
		let parts = full_url.split("#");
		let trgt = parts[1];
		let target_offset = $("#" + trgt).offset();
		let target_top = target_offset.top;

		$('html,body').animate({scrollTop: target_top -70}, 800);
		return false;

	});

	/*----------------------------
    START - Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 1000) {
			$('.scrolltotop').fadeIn();
		} else {
			$('.scrolltotop').fadeOut();
		}
	});
	$('.scrolltotop').on('click', function () {
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	});
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	$(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
	
	/*----------------------------
    START - WOW JS animation
    ------------------------------ */
	new WOW().init();

	$(function() {
		var $a = $(".tabs li");
		$a.click(function() {
			$a.removeClass("active");
			$(this).addClass("active");
		});
	});

	/*--
        Off Canvas Menu Activation
    -----------------------------------*/

	$('.menu-toggler').on('click', function(){
		$('.offcanvas-menu').addClass('open')
		$('.overlay').addClass('open')
	});

	$('.menu-close').on('click', function(){
		$('.offcanvas-menu').removeClass('open')
		$('.overlay').removeClass('open')
	});
	$('.nav-link').on('click', function(){
		$('.offcanvas-menu').removeClass('open')
		$('.overlay').removeClass('open')
	});

	$('.overlay').on('click', function(){
		$('.offcanvas-menu').removeClass('open')
		$('.overlay').removeClass('open')
	});

	/*Variables*/
	var $offCanvasNav = $('.primary-menu'),
		$offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

	/*Add Toggle Button With Off Canvas Sub Menu*/
	$offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

	/*Close Off Canvas Sub Menu*/
	$offCanvasNavSubMenu.slideUp();

	/*Category Sub Menu Toggle*/
	$offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
		var $this = $(this);
		if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length) {
				$this.parent('li').removeClass('active-expand');
				$this.siblings('ul').slideUp();
			} else {
				$this.parent('li').addClass('active-expand');
				$this.closest('li').siblings('li').find('ul:visible').slideUp();
				$this.closest('li').siblings('li').removeClass('active-expand');
				$this.siblings('ul').slideDown();
			}
		}
	});

	$( ".sub-menu" ).parent( "li" ).addClass( "menu-item-has-children" );

}(jQuery));
