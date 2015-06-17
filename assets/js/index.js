// Navbar scroll transition
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop <= 450){
      $("#topnav").removeClass("navbar-inverse");
      $("#topnav-logo").addClass("hidden");
    }else{
      $("#topnav").addClass("navbar-inverse");
      $("#topnav-logo").removeClass("hidden");  
    }//if-else
  });//win func.
});//ready func.

