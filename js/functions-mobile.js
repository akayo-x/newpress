/* ---------------------------------------------------------------------------------------------------------------------
 листание страниц свайпом
 -------------------------------------------------------------------------------------------------------------------- */

$(document).ready(function () {
    var jsSwipe = document.getElementById('js-swipe');
    if (jsSwipe === null) {
        return;
    }

    var fadeTime = 300;
    var onFirstPage = $('#onFirstPage').text();
    var hasMorePages = $('#hasMorePages').text();
    var swipeObj = new Hammer(jsSwipe);

    swipeObj.on('swipeleft swiperight', function (ev) {
        switch (ev.type) {
            case 'swipeleft':
                if (hasMorePages) {
                    $('body').fadeOut(fadeTime);
                    window.location = $('a[rel=next]').attr("href");
                } else {
                    $('.b-page-shadow-right').animate({opacity: 1}, fadeTime, function () {
                        $('.b-page-shadow-right').animate({opacity: 0}, fadeTime)
                    });
                }
                break;

            case 'swiperight':
                if (!onFirstPage) {
                    $('body').fadeOut(fadeTime);
                    window.location = $('a[rel=prev]').attr("href");
                } else {
                    $('.b-page-shadow-left').animate({opacity: 1}, fadeTime, function () {
                        $('.b-page-shadow-left').animate({opacity: 0}, fadeTime)
                    });
                }
                break;
        }
    });
});

/* ---------------------------------------------------------------------------------------------------------------------
 Нарративы (листалка)
 -------------------------------------------------------------------------------------------------------------------- */

$(function () {
    var narratives = $('#js-narratives-m');

    narratives.owlCarousel({
        items: 1,
        margin: 10,
        center: true,
        loop: false,
        dots: true,
        autoHeight: false
    });

    $('.js-narrative-prev').click(function () {
        narratives.trigger('prev.owl.carousel');
    });

    $('.js-narrative-next').click(function () {
        narratives.trigger('next.owl.carousel');
    });
});
