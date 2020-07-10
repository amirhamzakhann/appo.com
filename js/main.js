$(function(){

    // sticky header jquery code start here

    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        if(scrolling > 100) {
            $('.header').addClass('header-bg');
        }else {
            $('.header').removeClass('header-bg');
        }
    });
    // sticky header jquery code end here

    // Back To Top Button Jquery Code Start Here
    $('.btt').click(function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });
    // Back To Top Button Jquery Code End Here

    // TypedJs Jquery Start Code
    $(".typed").typed({
		strings: ["your desktop", "your tablet", "your mobile"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 500000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // TypedJs Jquery End Code

    // Veno Box Jquery Code Start
    $('.venobox').venobox(); 
    // Veno Box Jquery Code End

    // Preloader Jquery Start Here
    $(window).on('load', function(){
        $('.preloader').delay(2500).fadeOut(500);
    });
    // Preloader Jquery End Here
});