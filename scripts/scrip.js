
document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores de base y altura
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validar que los valores sean números
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor ingrese valores válidos para la base y la altura.";
    } else {
        // Calcular el área
        const area = (base * altura) / 2;
        // Mostrar el resultado
        document.getElementById('resultado').innerText = `El área del triángulo es: ${area} cm².`;
    }
});
