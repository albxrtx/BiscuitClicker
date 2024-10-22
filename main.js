let coockie = document.getElementById("img");
let puntuacion = document.getElementById("puntuacion");
let puntos = 0;
let multiplicador = 1;
coockie.addEventListener("click", function () {
  //   puntos++;
  puntos += multiplicador;
  puntuacion.textContent = puntos;
});

let autoclick = document.getElementById("btnAutoClick");

autoclick.addEventListener("click", function () {
  setInterval(sumar, 500);
  autoclick.style.backgroundColor = "#a87b4a";
  autoclick.disabled = true;
});

function sumar() {
  puntos++;
  puntuacion.textContent = puntos;
}

function cambiarMultiplicador(num) {
  multiplicador = num;
}
