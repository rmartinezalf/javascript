var variable_1 = "Hola Mundo";
//alert("hola a todos");
//var usuario = prompt("Usuario");
//var pass = prompt("Contraseña"); 
//var pDato = document.getElementById('dato');

function login(){
  var usuario1 =document.getElementById('nombre_1').value;
  var contrasena1 =document.getElementById('contrasena_1').value;
  document.getElementById('logeo').innerHTML = "Usuario "+usuario1+" Contraseña " + contrasena1

}
 //   pDato.innerHTML =nombre;
var user =document.getElementById('user');
    pDato.innerHTML =user;
var alcance = 10;

var user = "Usuario "+usuario+" Contraseña " + pass

var dat= [];
for (var i = 0; i < alcance;i++){
  console.log(i);
  dat.push(i);
  pDato.innerHTML = dat;
}

function myFunction(a, b) {
    return a * b;
}