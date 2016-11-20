$(function() {

  var hero = $('#hero');
  var laser = hero.find('.laser');

  laser.removeClass('laser');

  function scan() {
    hero.removeClass('idle').addClass('attac');
    laser.addClass('laser');

    setTimeout(function () {
     hero.removeClass('attac').addClass('idle');
     laser.removeClass('laser');
   }, 3000);
  }
  
  setInterval(scan, 5000 );

});