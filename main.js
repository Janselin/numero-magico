let numeroMagico = parseInt(Math.random() * 100);
console.log(numeroMagico);

const input = document.querySelector("#numero-usuario");
const boton = document.querySelector("#boton-adivinar");
const mensaje = document.querySelector("#mensaje")

boton.addEventListener("click", function(){
  let numeroUsuario = parseInt(input.value);
  if (numeroUsuario === numeroMagico) {
    mensaje.innerHTML = "Ganaste ✨"
    document.querySelector("main").classList.add("success");


  }else if (numeroUsuario > numeroMagico){
    mensaje.innerHTML = "El número es menor que "+numeroUsuario +" 🔽"
  }else{
    mensaje.innerHTML = "El número es mayor que "+numeroUsuario +" 🔼"
  }

});
