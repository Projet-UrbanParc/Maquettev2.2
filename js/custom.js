$(document).ready(function(){
  $('.btn-navigation').click(function(){
    $(this).find('.barre').toggleClass('white');
    $('nav').toggleClass('isOpen');
  });
});
/*=====================*/
/*   TOGGLE BISTROT    */
/*=====================*/
$(document).ready(function(){
  $('#mainbistrot').hide();
});
  $(function(){
    $('#boutonbistrot').click(function(){

      $('#mainbistrot').toggle('blind');
    });
  });
