$( document ).ready(function() {
   menu();
    $(".botones").fadeToggle(1);
    $("#btnImprimibles").fadeToggle();
    $("#btnImprimibles").animate({'top': '+=48%'},'1500',function() {
       $("#btnImprimibles").effect("bounce", { direction:'down', times:2 }, 800);
       $("#btnActividades").delay("slow").fadeToggle();
       $("#btnActividades").animate({'top':'+=26%'},'1000', function () {
         $("#btnActividades").effect("bounce", { direction:'down', times:2 }, 800);
         $("#btnManejo").delay("slow").fadeToggle();
         $("#btnManejo").animate({'top': '+=4%'},'2000', function () {
             $("#btnManejo").effect("bounce", { direction:'down', times:2 }, 800);       // $( ".botones" ).mouseover(resaltar(this));
             $( ".botones" ).hover( function() {
                  resaltar(this);
                }, function() {
                   setear(this);
                }
              );
            });
          });
    });
});

    // <!-- onmouseover="resaltar(this)" onmouseout="setear(this)"/> -->
function resaltar (obj) {
  console.log("Entré");
  var nObj = obj.id;
  switch (nObj) {
    case "btnManejo":
        $(obj).attr("src","./img/botones/manejo_emociones0002.png" )
    break;
    case "btnActividades":
            $(obj).attr("src","./img/botones/actividades0002.png" )
    break;
    case "btnImprimibles":
          $(obj).attr("src","./img/botones/imprimir0002.png" )
    break;
    default:
  }
}

function setear (obj) {
  var nObj = obj.id;
  switch (nObj) {
    case "btnManejo":
            obj.setAttribute("src","./img/botones/manejo_emociones0001.png" )
    break;
    case "btnActividades":
            obj.setAttribute("src","./img/botones/actividades0001.png" )
    break;
    case "btnImprimibles":
            obj.setAttribute("src","./img/botones/imprimir0001.png" )
    break;
    default:
  }
}

function menu() {
  var image = new Image();
   var src = './img/objetos/cuerda.png';
   image.src = src;
   $('#image').append(image);
// <img  id="cuerdaIzquierda" class="cuerdas" src="./img/objetos/cuerda.png" alt="" /> -->
}
