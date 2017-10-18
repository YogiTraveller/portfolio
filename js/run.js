$(document).ready(function() {
    $(window).resize(function() {
        var imgheight = $('.image-wrap img').height();
        $('.portfolio--enter .desc').css("margin-top", imgheight);
    }).resize();

    $(window).scroll(function(){
        var fromTop = $(window).scrollTop();
        $(".hero--text").css('transform', 'translateY(-' + fromTop/5 + 'px)');
        $(".intro").css('transform', 'translateY(-' + fromTop/10 + 'px)');
    });


});
