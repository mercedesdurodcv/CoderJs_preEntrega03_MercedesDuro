const palabras = ["argentina", "brasil", "chile", "paraguay", "bolivia", "colombia", "peru", "ecuador", "venezuela", "bolivia"];

const adivinanza = palabras[Math.floor(Math.random() * palabras.length)];

let palabraAleatoria = [];
let chances = 8;
    

for (let i = 0; i < adivinanza.length; i++) {
  palabraAleatoria.push("_");
}
    
function mostrarPalabra() {
  document.getElementById("palabra").textContent = palabraAleatoria.join(" ");
}
    
function adivinarLetra() {
  const letra = prompt("Ingresa una letra").toLowerCase();
  let correcto = false;
  
  for (let i = 0; i < adivinanza.length; i++) {
    if (adivinanza[i] === letra) {
      palabraAleatoria[i] = letra;
      correcto = true;
    }
  }
  
  if (!correcto) {
    chances--;
  }
  
  mostrarPalabra();
  document.getElementById("chances").textContent = `Oportunidades: ${chances}`;
  
  if (chances === 0) {
    alert("¡Perdiste! La palabra era:" + " " + adivinanza);
  } else if (palabraAleatoria.join("") === adivinanza) {
    alert("¡Ganaste! La palabra era:" + " " + adivinanza);
  }
}

    
mostrarPalabra();
document.getElementById("chances").textContent = `Oportunidades: ${chances}`;

    