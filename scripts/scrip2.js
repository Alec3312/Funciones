document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los sueldos de los cinco trabajadores
    const sueldo1 = parseFloat(document.getElementById('trabajador1').value);
    const sueldo2 = parseFloat(document.getElementById('trabajador2').value);
    const sueldo3 = parseFloat(document.getElementById('trabajador3').value);
    const sueldo4 = parseFloat(document.getElementById('trabajador4').value);
    const sueldo5 = parseFloat(document.getElementById('trabajador5').value);

    // Validar que todos los sueldos sean números válidos
    if (isNaN(sueldo1) || isNaN(sueldo2) || isNaN(sueldo3) || isNaN(sueldo4) || isNaN(sueldo5)) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos para todos los sueldos.";
    } else {
        // Calcular el total de la nómina
        const totalNomina = sueldo1 + sueldo2 + sueldo3 + sueldo4 + sueldo5;
        // Mostrar el resultado
        document.getElementById('resultado').innerText = `El total de la nómina a pagar es: $${totalNomina}`;
    }
});
