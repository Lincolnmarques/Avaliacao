function calcularMedia() {
    // Pega os valores dos inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    // Calcula a média aritmética
    const media = (num1 + num2 + num3 + num4) / 4;

    // Exibe o resultado
    document.getElementById('resultado').textContent = `A média é: ${media}`;
}