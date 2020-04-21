//for scrolltotop button
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 2000){
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
});



    //for Vertical text
    $(window).scroll(function(){
        if($(this).scrollTop() > 4625){
            $('#topBtn-p').fadeIn();
        } else {
            $('#topBtn-p').fadeOut();
        }
    });

    //for fixed button at home(Landing Page)
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $('#fixed-Btn').fadeOut();
        } else {
            $('#fixed-Btn').fadeIn();
        }
    });