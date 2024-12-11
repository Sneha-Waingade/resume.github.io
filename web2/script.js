$(document).ready(function() {
    // Smooth scroll effect
    $("nav a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Add animations when elements come into view
    $(window).scroll(function() {
        $('.hero-text').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            if (scroll + $(window).height() > position + 100) {
                $(this).addClass('fadeIn');
            }
        });
    });
});