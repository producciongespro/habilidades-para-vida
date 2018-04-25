// var imagen, imagenF;
$( document ).ready(function() {
  var imagenBack  = $('<img>');
  srcF ="./img/fondos/fondo_amarillo.png";
  $(imagenBack).addClass("img-fluid");
  $(imagenBack).attr("src",srcF);
  $(imagenBack).attr("id","bgFondo");
  $('#contenedor').append(imagenBack);

    // <img  class="img-fluid" id="bgFondo" src="./img/fondos/fondo_amarillo.png" alt="imagen de fondo" />
   menu();
   // templateBackg();
});
