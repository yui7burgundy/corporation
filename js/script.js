$(function() {

  if(window.matchMedia('(max-width: 768px)').matches){
    

    $(".menu-bar").click(function () {
      $(this).toggleClass('active');
      $("#gnav").toggleClass('panelactive');
      $("body").toggleClass('bodyactive');
      $(".menu_bg").fadeIn();
        return false;
    });
    
    
    $(".cross, .gnav > li > a").click(function () {
        $(".menu-bar").removeClass('active');
        $("#gnav").removeClass('panelactive');
        $("body").removeClass('bodyactive');
        $(".menu_bg").fadeOut();
        return false;
    });

    setInterval(function(){
      $('.mainscroll').animate({bottom:'-=10px'},1000);
      $('.mainscroll').animate({bottom:'+=10px'},1000);  
    },1000
    );


    $(document).click(function(e) {
      if(!$(e.target).closest('#gnav').length) {
      $("#gnav").removeClass('panelactive');
      $(".menu_bg").fadeOut();
      $("body").removeClass('bodyactive');
      return false;
    }});

    $(".js-go-top").click(
      function () {
        $('html, body').animate({scrollTop: 0}, 500);
      }
    );    

  } else {

$('.gnav > li > a').hover(
  function(){
    $(this).addClass('is-hover');
  },
  function(){
    $(this).removeClass('is-hover');
  }
);

$('.header__inr > div > img, .rct_button').hover(
  function(){
    $(this).fadeTo('fast',0.7);
  },
  function(){
    $(this).fadeTo('fast',1.0);
  }
);

setInterval(function(){
  $('.mainscroll').animate({bottom:'-=10px'},1000);
  $('.mainscroll').animate({bottom:'+=10px'},1000);  
},1000
);

  $('.more_content > a').hover(
    function(){
    $(this).find('.ya_red').animate({'left':'10px'},200,'linear');
    },
    function(){
    $(this).find('.ya_red').animate({'left':'0px'},200,'linear');
    }
  );
  


$(".js-go-top").click(function () {
  $('html, body').animate({scrollTop: 0}, 500);
});

}});

