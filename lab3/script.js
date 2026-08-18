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

// ===== Ejercicio 2: Panel de estadísticas =====
const estadisticas = [
{ etiqueta: 'Proyectos', valor: 24 },
{ etiqueta: 'Clientes', valor: 12 },
{ etiqueta: 'Años de experiencia', valor: 3 },
];
const contenedorStats = document.querySelector('#panel-estadisticas');
function renderizarEstadisticas(lista) {
lista.forEach(function (item) {
const tarjeta = document.createElement('div');
tarjeta.classList.add('tarjeta-stat');
tarjeta.innerHTML = `<span class="stat-numero"
data-valor="${item.valor}">0</span>
<p>${item.etiqueta}</p>`;
contenedorStats.appendChild(tarjeta);
});
}
// TODO: función animarConteo(elemento, valorFinal) con setInterval
// TODO: lógica del botón +1 / -1 para el contador de interacciones