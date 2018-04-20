var imagen = new Image();
$( document ).ready(function() {
   menu();
})

// function menuCall() {
//   menu();
// }

function menu() {
    $.getJSON("data/data_carga_menu.json", function(result){
        for (var i = 0; i < result.length; i++) {
            imagen = $('<img>');
            src = result[i].imagen;
            valor= "va";
            claseObj = result[i].clase;
            $(imagen).attr("id",result[i].id);
            $(imagen).addClass(claseObj);
            $(imagen).attr("src",src);
            if (claseObj == "cuerdas") {
                 $('#contenedor').append(imagen);
             } else {
                 var enlace = $("<a>");
                 ident = "img"+i;
                 $(enlace).attr("id",ident);
                 $(enlace).attr("href","www.mep.go.cr");
                 $(enlace).html(imagen);
                 $('#contenedor').append(enlace);
                 animButton(enlace.children());
             }
        } //end del for
    }); //fin del json

    // bottom_anim(img);
    $(".botones"  ).hover( function() {
         bottom_anim(this,2);
       }, function() {
          bottom_anim(this,1);
       }
     );
     // animButton(imagen);
};

function animButton(img) {
  var valorTop = "", valorDelay="";
  $(img).fadeToggle(1);
     switch ($(img).attr("id")) {
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
