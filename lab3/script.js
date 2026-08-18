// ===== Ejercicio 1: Tema y saludo dinámico =====
let temaActual = 'claro';
const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');
function cambiarTema() {
document.body.classList.toggle('modo-oscuro');
temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀ Modo claro';
}
function saludar() {
    const horaActual = new Date().getHours();
  var mensaje = '';
  if (horaActual > 6 && horaActual < 12) {
    mensaje = 'buenos dias';
  } else if (horaActual >= 12 && horaActual < 20) {
    mensaje = 'buenas tardes';
  } else {
    mensaje = 'buenas noches';
  }
  saludoElemento.textContent = mensaje;
}
botonTema.addEventListener('click', cambiarTema);
saludar();