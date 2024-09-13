
document.getElementById('enviarBtn').addEventListener('click', function() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Validar que todos los campos estén llenos
    if (nombre === "" || apellido === "" || edad === "" || email === "" || telefono === "") {
        document.getElementById('resultado').innerText = "Por favor, completa todos los campos.";
    } else {
        // Mostrar los datos en la sección de resultados
        document.getElementById('resultado').innerHTML = `
            <h2>Datos Personales:</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Edad:</strong> ${edad} años</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
        `;
    }
});
