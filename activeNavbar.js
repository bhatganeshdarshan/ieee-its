$(document).ready(function() {
    var currentUrl = window.location.href;
    $('#navbar a.nav-link').each(function() {
        var linkUrl = $(this).attr('href');
        if (currentUrl.includes(linkUrl)) {
            $(this).addClass('active');
        }
    });
});