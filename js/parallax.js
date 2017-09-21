/*$(window).scroll(function(){
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    $(".parallax-bg").css("background-position", (wScroll*0.25)+"px")
}*/


$(document).on('click', 'a[href*="#"]', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
});
