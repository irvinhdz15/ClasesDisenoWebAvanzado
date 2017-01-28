$(document).ready(function(){
  var imagenes = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg'];

  $(".imgFondo").css('background-image','url('+ imagenes[Math.floor(Math.random()*5)]+ ')');

  $("#mandar").click(function(){
    var direccion = $("#direc").val();


  var link = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion +'&key=AIzaSyA8qSo6RDeHpuIHW2znCXIL5NaNxUsjjjs';

  $.ajax({
    dataType: "json",
    url: link,
    success: recibirDatos
  });

  function recibirDatos(json){
    var informacion = json;
    var cp = (informacion.results[0].address_components[6].long_name);

    $("#respuesta").append('<div class="offset-m3 col m6 card-panel #1e88e5 blue darken-1"><h6>Tu Codigo Postal es: '+cp+' </h6></div>')
  }
  });

});
