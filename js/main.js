$(function () {

    // Footer
    $('#year').text(new Date().getFullYear());

    // Init scrollspy
    $('body').scrollspy({
        target: "#main-nav"
    });

    // Smooth scroll
    $('#main-nav a').on('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            let hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});