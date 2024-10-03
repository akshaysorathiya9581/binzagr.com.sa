$(document).ready(function() {

    // Sidebar
    /*    $('.sub-menu ul').hide();*/
    $(".sub-menu a").click(function() {
        $(this).parent(".sub-menu").children('a').toggleClass('active');
        $(this).parent(".sub-menu").children("ul").slideToggle("100");
        $(this).find(".right").toggleClass("fa-caret-down");
    });

    $('.menu').click(function() {
        $('.sidebar').toggleClass('sidebar-toggler');
    });

    // Products Grid
    $('.product-grid').isotope({
        itemSelector: '.product-single-grid',
    });

    // Fancybox js
    $(".gallery a").attr("data-fancybox", "mygallery");
    $(".gallery a").fancybox();


    // Animate Fade Jquery

    function scrollWaypointInit(items, trigger) {
        items.each(function() {
            var element = $(this),
                osAnimationClass = element.data("animation"),
                osAnimationDelay = element.attr('data-animation-delay');

            element.css({
                '-webkit-animation-delay': osAnimationDelay,
                '-moz-animation-delay': osAnimationDelay,
                'animation-delay': osAnimationDelay
            });

            var trigger = (trigger) ? trigger : element;

            trigger.waypoint(function() {
                element.addClass('animated').addClass(osAnimationClass);
            }, {
                // triggerOnce: true,
                offset: '80%'
            });
        });
    }


    scrollWaypointInit($('.animateMe'));
});
//Call the init