document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener las calificaciones de las tres materias
    const cal1 = parseFloat(document.getElementById('materia1').value);
    const cal2 = parseFloat(document.getElementById('materia2').value);
    const cal3 = parseFloat(document.getElementById('materia3').value);

    // Validar que todas las calificaciones sean números válidos
    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3) || cal1 < 0 || cal2 < 0 || cal3 < 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese calificaciones válidas.";
    } else {
        // Calcular el promedio
        const promedio = (cal1 + cal2 + cal3) / 3;
        // Mostrar el resultado
        document.getElementById('resultado').innerText = `El promedio final es: ${promedio.toFixed(2)}`;
    }
});
