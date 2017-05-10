$(window).scroll(function(){
parallax();
})

function parallax() {

var wScroll = $(window).scrollTop();
$('.background').css('background-position','center '+(wScroll*0.9)+'px')
}

if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 450;
	var distance = 300;
    
    $('html,body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}