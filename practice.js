$(document).ready(function(){
  $('h1').hide();
  $("h1").fadeIn("slow");

  $(".escaping").css("opacity", 0);
  $(".fail").css("opacity", 0);
  $(".losingMyself").css("opacity", 0);

  $(window).scroll(function(){
    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var windowScrollBot = windowScrollTop + windowHeight;

    var objOffset = $(".escaping").offset();
    var objOffsetTop = objOffset.top;

    $(".status").html(objOffsetTop);

    if(windowScrollBot > objOffsetTop){
      $(".escaping").animate({"opacity" : 1}, 2000).addClass("animation-complete");
      $(".fail").animate({"opacity" : 1}, 4000).addClass("animation-complete");
      $(".losingMyself").animate({"opacity" : 1}, 6000).addClass("animation-complete");
    }
  });

  var buttonClick = '.clickMe';
  $(buttonClick).click(function(){
    $(buttonClick).removeClass('active');
    $(this).toggleClass('active');
  });
});
