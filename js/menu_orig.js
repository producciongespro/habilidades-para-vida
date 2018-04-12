

function resaltar (obj) {
  var nObj = obj.id;
  switch (nObj) {
    case "btnManejo":
            obj.setAttribute("src","./img/botones/manejo_emociones0002.png" )
    break;
    case "btnActividades":
            obj.setAttribute("src","./img/botones/actividades0002.png" )
    break;
    case "btnImprimibles":
            obj.setAttribute("src","./img/botones/imprimir0002.png" )
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
