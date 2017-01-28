/*alert("tambien funciona aqui")

document.write("hola mundo");
console.log("hola mundo");

document.getElementByid("texto").innerHTML=("este es el segundo texto");
*/

/*var x,y,z;
x=5;
y=6.3;
z=x+y;

alert(z);
*/

/*
function tuNombreCompleto(nombre,apellido){
  var nombreCompleto= nombre+" " +apellido;
  document.write(nombreCompleto);
  return nombreCompleto;
//return nombreCompleto
}

var alumno= tuNombreCompleto("jorge","monzalbo");
alert(alumno);
*/

/*

//hay varias formas de crear objetos
var miPrimerObjeto ={ //tambien se usa para crear objetos
  nombre:"Isela",apellido:"Garcia"};//atributos

  alert(miPrimerObjeto.nombre);
*/
/*
var persona="jorge";
var otraPersona=persona;

persona="Amanda";
document.write(persona);
document.write(otraPersona);
*/
/*
var persona={nombre:"jorge"};
var otraPersona2=persona;

persona.nombre="Amanda";


document.write(persona.nombre);
document.write(otraPersona2.nombre);
*/

/*var fruta={
  nombre:"mango",
  color:"amarillo",  //para separar atributos se usa coma ,
  dulce:8,


  queDulceSoy: function(){   //dentro de los objetos pueden ir tambien los metodos
    alert("soy muy dulce");
  }
};


//esto es para llamar los metodos del objeto
fruta.queDulceSoy();
*/
/*
document.getElementByid("primero").innerHTML +="Jorge";
*/

/*
document.getElementsById("botonConClik").onclick=function(){
  document.getElementById('aparecerTexto').innerHTML="este era un texto fantasma";
document.getElementById("aparecerTexto").style.color="blue"; background-color

}

var nombre="primero"
document.getElementById('priboton');oonclick=function(){
  document.getElementById('nombre').ininnerHTML="si resulto";

}

document.getElementById("priboton").onclick=function(){
  var valor = document.getElementById("miInput").value;

  document.getElementById("vacio").innerHTML=valor;
}*/


//Juego piedra papel o tijeras.

//Primera parte del juego, pide al usuario que elija entre piedra, papel o tijera.
var decisionUsuario = prompt("¿Piedra, papel o tijera?");

//Segunda parte del juego. El ordenador "decide" su elección de forma aleatoria.
var aleatorio = function() {
    var numero =  Math.floor((Math.random()*3)+1);
    var respuesta;
    if (numero == 1) {
        respuesta = "Piedra";
    } else if (numero == 2) {
        respuesta = "Papel";
    } else {
        respuesta = "Tijera";
    }
    return respuesta;
};

var decisionOrdenador = aleatorio();
console.log ("Usuario: " +decisionUsuario + ", Ordenador: " +decisionOrdenador);

logicaJuego(decisionUsuario, decisionOrdenador);

//Tercera parte del juego. Se decide quién es el ganador
var logicaJuego = function(decisionUsuario, decisionOrdenador) {
    if (decisionUsuario == decisionOrdenador) {
        return console.log("Empate, los dos eligieron " +decisionUsuario);
    } else {
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Papel") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
        }
        if (decisionUsuario == "Piedra" && decisionOrdenador == "Tijera") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
        }
        if (decisionUsuario == "Papel" && decisionOrdenador == "Tijera") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
         }
         if (decisionUsuario == "Papel" && decisionOrdenador == "Piedra"){
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
        }
         if (decisionUsuario == "Tijera" && decisionOrdenador == "Piedra") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el ordenador.");
            }
         if (decisionUsuario == "Tijera" && decisionOrdenador == "Papel") {
            console.log(""+decisionUsuario +" vs " +decisionOrdenador + ", gana el usuario");
        }
    }
};
