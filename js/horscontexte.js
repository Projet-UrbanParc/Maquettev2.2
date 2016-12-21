// Horscontexte was here !
// ==============================LINK 1 =================================/
// On retire la classe .box-active pour permettre à l'animation de re-trigger

document.getElementById('link1').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

// On ajoute la classe .box-active pour trigger l'animation CSS3
document.getElementById('link1').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');


};
//================================LINK 2 ================================/

document.getElementById('link2').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');

};

document.getElementById('link2').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};
//================================LINK 3 ==============================/
document.getElementById('link3').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link3').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

//================================LINK 4 ==============================/
document.getElementById('link4').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link4').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

//================================LINK 5 ==============================/
document.getElementById('link5').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link5').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

//================================LINK 6 ==============================/
document.getElementById('link6').onmousedown = function()
{
    document.getElementById('section1').classList.remove('box-active');
    document.getElementById('section2').classList.remove('box-active2');
    document.getElementById('section3').classList.remove('box-active');
};

document.getElementById('link6').onclick = function()
{
    document.getElementById('section1').classList.add('box-active');
    document.getElementById('section3').classList.add('box-active');
    document.getElementById('section2').classList.add('box-active2');
};

///And Alx was Here!
/// Effets sonore
      //Effet Audio Acceuil
      $('#link1').click(function(){
        $('#'+$(this).attr('rel'))[0].play();
      });

      //Effet Audio Accrobranche
      $('#link2').click(function(){
        $('#'+$(this).attr('rel'))[0].play();
      });

      //Effet Audio Skatepark
      $('#link3').click(function(){
        $('#'+$(this).attr('rel'))[0].play();
      });

      //Effet Audio Bistrot
      $('#link4').click(function(){
        $('#'+$(this).attr('rel'))[0].play();
      });

      //Effet Audio Event
      $('#link5').click(function(){
        $('#'+$(this).attr('rel'))[0].play();
      });

      //Effet Audio Anniversaire
      $('#link6').click(function(){
        $('#'+$(this).attr('rel'))[0].play();
      });

      //Mute Audio
      var son1 = document.getElementById('son1');
      var son2 = document.getElementById('son2');
      var son3 = document.getElementById('son3');
      var son4 = document.getElementById('son4');
      var son5 = document.getElementById('son5');
      var son6 = document.getElementById('son6');

      document.getElementById('mute').addEventListener('click', function(e){

        e = e || window.event;

        son1.muted = !son1.muted;
        son2.muted = !son2.muted;
        son3.muted = !son3.muted;
        son4.muted = !son4.muted;
        son5.muted = !son5.muted;
        son6.muted = !son6.muted;
        e.preventDefault();



}, false);
