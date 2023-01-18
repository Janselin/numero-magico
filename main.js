let numeroMagico = parseInt(Math.random() * 100);
console.log(numeroMagico);

const input = document.querySelector("#numero-usuario");
const boton = document.querySelector("#boton-adivinar");
const mensaje = document.querySelector("#mensaje")

boton.addEventListener("click", function(){
  let numeroUsuario = parseInt(input.value);
  if (numeroUsuario === numeroMagico) {
    alert("Ganaste✨");

  }else if (numeroUsuario > numeroMagico){
    alert("El número es menor que "+numeroUsuario);
  }else{
    alert("El número es mayor que "+numeroUsuario);
  }

});
