$(document).ready(function(){
  $('.btn-navigation').click(function(){
    $(this).find('.barre').toggleClass('white');
    $('nav').toggleClass('isOpen');
  });
});
/*=======================================*/
/*         HORRAIRE GRAND ECRAN          */
/*=======================================*/
$(function(){
  $('#horaire').hide();
  $('#infohoraire').hover(function(){
    $('#horaire').fadeIn();
  }, function(){
    $('#horaire').fadeOut();
  });
});
/*=======================================*/
/*         HORRAIRE PETIT ECRAN          */
/*=======================================*/
$(function(){
  $("#horairetel").hide();
  $("#infohorairetel").click(function(){
    $("#horairetel").toggle('slow');
  });
});
