$(document).ready(function() {

  if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    //i.e. apply safari class via jquery
    $(".navbar").addClass("fancy");
  }
});