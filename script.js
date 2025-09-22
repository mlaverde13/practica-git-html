document.getElementById('btnSaludar').addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value.trim();
  const mensaje = document.getElementById('mensaje');

  if (nombre === "") {
    mensaje.textContent = "Por favor, ingresa tu nombre.";
    mensaje.classList.add('text-danger');
    mensaje.classList.remove('text-success');
  } else {
    mensaje.textContent = `Hola, ${nombre}! Bienvenido a la práctica.`;
    mensaje.classList.add('text-success');
    mensaje.classList.remove('text-danger');
  }
});
