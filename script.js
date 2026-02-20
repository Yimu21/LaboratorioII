// 1. Click
document.getElementById('caja-click').addEventListener('click', () => alert("¡Clic detectado!"));

// 2. Mousemove (Divertido)
document.getElementById('caja-hover').addEventListener('mousemove', function(e) {
    this.style.backgroundColor = `rgb(${e.offsetX}, 220, 200)`;
});

// 3. Doble click
document.getElementById('caja-doble').addEventListener('dblclick', () => alert("¡Doble clic!"));

// 4. Keydown
document.getElementById('input-tecla').addEventListener('keydown', (e) => console.log("Tecla: " + e.key));

// 5. Focus
document.getElementById('input-foco').addEventListener('focus', (e) => e.target.style.background = "#fff");

// 6. Blur
document.getElementById('input-blur').addEventListener('blur', () => alert("Saliste del campo"));

// 7. Submit
document.getElementById('mi-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Formulario enviado");
});

// 8. Change
document.getElementById('mi-select').addEventListener('change', (e) => alert("Cambiado a: " + e.target.value));
