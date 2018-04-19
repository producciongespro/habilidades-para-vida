var imagen = new Image();
$( document ).ready(function() {
   menuCall();
})

function menuCall() {
  menu();
 //  $("#btnImprimibles").hover( function() {
 //     console.log("En evento de botones");
 //          bottom_anim(this,2);
 //      }, function() {
 //         bottom_anim(this,1);
 //       }
 // );
}
function menu() {
    $.getJSON("data/data_carga_menu.json", function(result){
        for (var i = 0; i < result.length; i++) {
            var imagen = new Image();
            src = result[i].imagen;
            imagen.src = src;
            $(imagen).attr("id",result[i].id);
            $(imagen).attr("class",result[i].clase);
                $('#contenedor').append(imagen);

            // if (result[i].clase = "cuerdas") {
            //     $('#contenedor').append(imagen);
            // } else {
              // $('#contenedor').append("<a href=''></a>");
              console.log(result[i].id_link);
              // switch (result[i].id) {
              //   case "btnImprimibles":
              //       $('a').attr('href','http://smashingmagazine.com');
              //       $('a').attr('id',result[i].id_link);
              //       $('a').append(imagen);
              //   break;
              //   case "btnActividades":
              //       $('a').attr('href','http://smashingmagazine.com');
              //       $('a').attr('id',result[i].id_link);
              //       $('a').append(imagen);
              //   break;
              //   case "btnManejo":
              //       $('a').attr('href','http://smashingmagazine.com');
              //       $('a').attr('id',result[i].id_link);
              //       $('a').append(imagen);
              //   break;
              //   default:
              // }
            // }
        } //end del for
    }); //fin del json
};

function animButton(img) {
  var valorTop = "", valorDelay="";
  $(img).fadeToggle(1);
     switch (img.id) {
       case "btnImprimibles":
          valorTop = '+=48%';
          valorDelay = "1500";
       break;
       case "btnActividades":
          valorTop = '+=26%';
          valorDelay = "1000";
       break;
       case "btnManejo":
          valorTop = '+=4%';
          valorDelay = "2000";
       break;
       default:
     }
     $(img).delay("slow").fadeToggle();
     $(img).animate({'top': valorTop},valorDelay, function() {
         $(img).effect("bounce",{ direction:'down', times:2 }, 800);
     });
};

function bottom_anim (obj,ind) {
  var nObj = obj.id;
  console.log("En bottom animate"+obj.id);
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
}
