$(document).ready(function(){
  $(".button2").click(function(){
    $('table.visibleshow').css({'display':'none'});
    $(".hiddencontent").slideDown("5000");
    $("#slidebut").hide();
  });
});
