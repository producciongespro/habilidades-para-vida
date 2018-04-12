var t = 1;
var p1, p2 = 0;



function verificarTurno (obj) {
    imagen = parseInt(obj.alt);
    id = parseInt(obj.id);
    cargarImg(id);
    console.log("turno: ", t);
    if (t==1) {
      /*IMPAR*/
      t=2;
      p1 = imagen;
      p2=0;
    }else {
    /*PAR*/
    t=1;
    p2 = imagen;
  }
console.log("posición 1: ", p1, "---posición 2: ", p2 );

verificarGane(id);
}

function cargarImg (id) {
  /*setTimeout(iniciarFondo, 1000);*/

iniciarFondo();
  switch (id) {
      case 1:
            document.getElementById("1").src="../img/sprites/oFeliz.png";
        break;
        case 2:
            document.getElementById("2").src="../img/sprites/aEnojada.png";
        break;
        case 3:
            document.getElementById("3").src="../img/sprites/oSentimental.png";
        break;
        case 4:
          document.getElementById("4").src="../img/sprites/oLlorando.png";
        break;
        case 5:
            document.getElementById("5").src="../img/sprites/oFeliz.png";
        break;
        case 6:
          document.getElementById("6").src="../img/sprites/aEnojada.png";
        break;
        case 7:
          document.getElementById("7").src="../img/sprites/oSentimental.png";
        break;
        case 8:
          document.getElementById("8").src="../img/sprites/oLlorando.png";
        break;
        default:
      }

}

function iniciarFondo () {
  document.getElementById("1").src="../img/sprites/pregunta.png";
  document.getElementById("2").src="../img/sprites/pregunta.png";
  document.getElementById("3").src="../img/sprites/pregunta.png";
  document.getElementById("4").src="../img/sprites/pregunta.png";
  document.getElementById("5").src="../img/sprites/pregunta.png";
  document.getElementById("6").src="../img/sprites/pregunta.png";
  document.getElementById("7").src="../img/sprites/pregunta.png";
  document.getElementById("8").src="../img/sprites/pregunta.png";
}

function verificarGane (id) {
  if (p1==p2) {
    /*Oculta cuadros*/

    switch (id) {
      case 1:
      document.getElementById("1").style.visibility="hidden";
      document.getElementById("5").style.visibility="hidden";
      break;
      case 2:
      document.getElementById("2").style.visibility="hidden";
      document.getElementById("6").style.visibility="hidden";
      break;
      case 3:
      document.getElementById("3").style.visibility="hidden";
      document.getElementById("7").style.visibility="hidden";
      break;
      case 4:
      document.getElementById("4").style.visibility="hidden";
      document.getElementById("8").style.visibility="hidden";
      break;
      case 5:
      document.getElementById("1").style.visibility="hidden";
      document.getElementById("5").style.visibility="hidden";
      break;
      case 6:
      document.getElementById("2").style.visibility="hidden";
      document.getElementById("6").style.visibility="hidden";
      break;
      case 7:
      document.getElementById("3").style.visibility="hidden";
      document.getElementById("7").style.visibility="hidden";
      break;
      case 8:
      document.getElementById("4").style.visibility="hidden";
      document.getElementById("8").style.visibility="hidden";
      break;


      default:

    }
  }
}
