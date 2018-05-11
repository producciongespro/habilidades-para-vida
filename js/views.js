 var imagen, imagenF;

 function secundBackg(option) {
   imagenF = $('<img>');
   srcF ="img/fondos/fondo-transparente.png";
   if (option == "1") {
     $(imagenF).addClass("fondoT");

   } else {
      $(imagenF).addClass("backgLarge");
   }
   $(imagenF).attr("src",srcF);
   $('#contenedor').append(imagenF);
   $(imagenF).hide();
 }

function fileJson(opt) {
  var archivo = "", rutaF="";
  switch (opt) {
    case 1:
       rutaF= "data/carga_img_menu.json";
      break;
      case 2:
         rutaF = "";
        break;
    default:
  }
  archivo = rutaF;
  return archivo;
}


function menu(metodo) {
    var fileJ = fileJson(1);
     // mainBackg()
     secundBackg("1");
    $.getJSON(fileJ, function(result){
        for (var i = 0; i < result.length; i++) {
            imagen = $('<img>');
            src = result[i].imagen;
            valor= "va";
            claseObj = result[i].clase;
            $(imagen).attr("id",result[i].id);
            $(imagen).addClass(claseObj);
            $(imagen).attr("src",src);
            $('#contenedor').append(imagen);
            if($(imagen).hasClass("botones"))
             {
                 menuAnimButton($(imagen), metodo);
              }
        } //end del for

    }); //fin del json

    function menuAnimButton(img, metodo) {
      var valorTop = "", valorDelay="", endAnim=false;
      $(img).fadeToggle(1);
         switch ($(img).attr("id")) {
           case "btnImprimibles":
              valorTop = '+=57%';
              valorDelay = "1500";
           break;
           case "btnActividades":
              valorTop = '+=32%';
              valorDelay = "1000";
           break;
           case "btnManejo":
              valorTop = '+=7%';
              valorDelay = "2000";
              endAnim=true;
           break;
           default:
         }
         $(img).delay("slow").fadeToggle();
         $(img).animate({'top': valorTop},valorDelay, function() {
              $(img).effect("bounce",{ direction:'down', times:2 }, 800,function () {
                if (endAnim) {
                  $(imagenF).show("slow");
                  console.log("fin de la animacion");
                  metodo();
              }
              });
         });
         $(img).hover( function() {
                  // menuAnimHover (this,2);
                   menuAnimHover (this,2);
                }, function() {
                  menuAnimHover (this,1);
                });

          // function() {
                // alert( $( this) );
          // });

          }

    function menuAnimHover (obj,ind) {
      var nObj = $(obj).attr("id");
      ruta = './img/botones/';
      switch (nObj) {
        case "btnManejo":
            $(obj).attr("src",ruta+"manejo_emociones000"+ind+".png" );
        break;
        case "btnActividades":
            $(obj).attr("src",ruta+"actividades000"+ind+".png" );
        break;
        case "btnImprimibles":
            $(obj).attr("src",ruta+"imprimir000"+ind+".png" );
        break;
        default:
      };
    };

}
