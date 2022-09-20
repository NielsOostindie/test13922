$(document).ready(function () {
    var docEl = $(document),// selector die die document beet pakt
        headerEl = $('ul'),// selector die die ul beet pakt
        headerWrapEl = $('.wrapHead'),//selector die die wraphead beet pakt
        navEl = $('nav'),// selector die die nav beet pakt
        linkScroll = $('.scroll');// selector die die scroll beet pakt

    docEl.on('scroll', function () { // vuurt function uit op scroll
        if (docEl.scrollTop() > 260) {// als de bovenkant op 260 hoog is
            headerEl.addClass('fixed-to-top');// houd de ul altijd boven
            headerWrapEl.addClass('fixed-to-top');// houd de wraphead altijd boven
            navEl.addClass('fixed-to-top');// houd de nav altijd boven
        }
        else {
            headerEl.removeClass('fixed-to-top');
            headerWrapEl.removeClass('fixed-to-top');
            navEl.removeClass('fixed-to-top');
        }
    });

    linkScroll.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});
