$( document ).ready(function() {
   menu();
    // $(".botones").fadeToggle(1);
    // $("#btnImprimibles").fadeToggle();
    // $("#btnImprimibles").animate({'top': '+=48%'},'1500',function() {
    //    $("#btnImprimibles").effect("bounce", { direction:'down', times:2 }, 800);
    //    $("#btnActividades").delay("slow").fadeToggle();
    //    $("#btnActividades").animate({'top':'+=26%'},'1000', function () {
    //      $("#btnActividades").effect("bounce", { direction:'down', times:2 }, 800);
    //      $("#btnManejo").delay("slow").fadeToggle();
    //      $("#btnManejo").animate({'top': '+=4%'},'2000', function () {
    //          $("#btnManejo").effect("bounce", { direction:'down', times:2 }, 800);       // $( ".botones" ).mouseover(resaltar(this));
    //          $( ".botones" ).hover( function() {
    //               bottom_anim(this,2);
    //             }, function() {
    //                bottom_anim(this,1);
    //             }
    //           );
    //         });
    //       });
    // });
});
function menu() {
    // $.getJSON("./data/data_carga_menu.json", function(datos) {
    //   dataEsp = datos;
    // });
    // console.log(dataEsp.imagen[0]);
    $.getJSON("./data/data_carga_menu.json", function(result){
        $.each(result, function(i, field){
            $("#contenedor").append(field + " ");
        });
    });
};

function bottom_anim (obj,ind) {
  var nObj = obj.id;
  ruta = './img/botones/'
  switch (nObj) {
    case "btnManejo":
        $(obj).attr("src",ruta+"manejo_emociones000"+ind+".png" )
    break;
    case "btnActividades":
            $(obj).attr("src",ruta+"actividades000"+ind+".png" )
    break;
    case "btnImprimibles":
          $(obj).attr("src",ruta+"imprimir000"+ind+".png" )
    break;
    default:
  }
}

// function menu() {
//   console.log("Entré");
//   var imagen = new Image();
//    var src = './img/objetos/cuerda.png';
//    imagen.src = src;
//    $(imagen).attr("id","cuerdaIzquierda");
//    $(imagen).attr("class","cuerdas");
//    $('#contenedor').append(imagen);
// // <img  id="cuerdaIzquierda" class="cuerdas" src="./img/objetos/cuerda.png" alt="" /> -->
// }
