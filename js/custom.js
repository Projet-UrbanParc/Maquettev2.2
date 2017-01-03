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
      $('#mainbistrot').css("background-color", "rgba(0, 0, 0, 0.95)");
      $('#mainbistrot').toggle('blind');
      $('#mainbistrot').toggleClass('main_bistrot');
    });
  });
