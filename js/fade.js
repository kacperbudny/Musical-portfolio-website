$(document).ready(function()
{
  $("#listen").fadeOut(1);
  $("#songname").fadeOut(1).fadeIn(2000, function() {$("#listen").fadeIn(2000);});
  $(".release").fadeOut(1).fadeIn(2000, function() {$("#listen").fadeIn(2000);});
});
