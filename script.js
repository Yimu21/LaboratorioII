// 1. getElementById
const cajaId = document.getElementById('caja-id');
cajaId.addEventListener('click', () => cajaId.style.borderRadius = "50%");

// 2. getElementsByClassName
const cajasClase = document.getElementsByClassName('tarjeta-clase');
cajasClase[0].addEventListener('mouseenter', () => cajasClase[0].style.backgroundColor = "#fff");

// 3. getElementsByTagName
const secciones = document.getElementsByTagName('section');
secciones[0].addEventListener('dblclick', () => alert("Sección seleccionada por etiqueta"));

// 4. querySelector (por atributo CSS)
const inputEspecial = document.querySelector('[data-tipo="especial"] input');
inputEspecial.addEventListener('input', (e) => console.log(e.target.value));

// 5. querySelectorAll (para múltiples elementos)
const botones = document.querySelectorAll('.btn-grupo');
botones.forEach(btn => {
    btn.addEventListener('click', () => btn.style.fontWeight = "bold");
});

// 6. querySelector (Selector CSS complejo)
const emailField = document.querySelector('div.rojo #email-campo');
emailField.addEventListener('focus', () => emailField.style.border = "2px solid red");

// 7. Selección de formulario
const formulario = document.querySelector('#form-datos');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Formulario detectado");
});

// 8. getElementById para Select
const miSelect = document.getElementById('opciones');
miSelect.addEventListener('change', () => alert("Cambio a: " + miSelect.value));