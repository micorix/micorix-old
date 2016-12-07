$("#splash h1").textillate({ initialDelay: 200, in: { effect: 'fadeInLeft'}});
$("#splash h3").textillate({ initialDelay: 600, in: { effect: 'fadeInDown', sync: true }});
$("#splash i").delay(1300).fadeIn();
$("#splash i").click(function(){
$("#splash i").fadeOut();
$("#splash").animate({paddingTop: "20px"}).css({textShadow: "none"});
$("#splash .background").css({filter: "grayscale(1)"}).slideUp(500, "swing");
$("#splash h1, #splash h3").css({color: "#ffb300"});
$("#section1").css({display: "block"}).animate({top: "40%"});
});
$("#mail").hover(function(){
    $("#mail").toggleClass("fa-envelope").toggleClass("fa-envelope-o");
});
