$("#fecha").datepicker();

$(function(){
  $("#arrastre").draggable(); /*Nos permite mover el recuadrito*/
  $("#canasta").droppable({
    drop: function(event,ui){
      $(this).addClass("ui-state-highlight").find("p").html("anotaste una canasta");
    }
  })
});
