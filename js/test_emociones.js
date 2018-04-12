function cambiarImg(obj){
  var aux = parseInt(obj.alt);

  console.log(obj.alt);
  aux=aux+1;
  if (aux>4) {
    aux=1;
  }
  obj.setAttribute("alt", aux);
    switch (aux) {
    case 1:
      obj.setAttribute("src","../img/sprites/oLlorando.png" )
      break;
      case 2:
        obj.setAttribute("src","../img/sprites/oFeliz.png" )
      break;
      case 3:
          obj.setAttribute("src","../img/sprites/oMiedo.png" )
      break;
      case 4:
          obj.setAttribute("src","../img/sprites/oRisa.png" )
      break;


    default:
  }
}
