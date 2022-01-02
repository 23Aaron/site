$(document).ready(function() {

  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    //i.e. apply safari class via jquery
    $(".navbar").addClass("fancy");
  }

  new TypeIt('#typedout', {
    strings: '23 Aaron',
    speed: 50, 
    afterComplete: function (instance) {
      instance.destroy(true);
    }
  }).go();

});

