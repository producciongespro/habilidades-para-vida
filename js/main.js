
$( document ).ready(function() {
     menu(agregarEvento);
     console.log("Hola");

});


function agregarEvento() {
  $(".botones").click(function() {
    console.log("ENTRÉ");
    console.log(this.id);
    // switch () {
    //   case expression:
    //
    //     break;
    //   default:

    // }
  });
}
