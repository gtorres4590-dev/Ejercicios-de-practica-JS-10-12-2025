let input = prompt("Escribe 3 números separados por comas (e.g., 1,2,3):");

function procesarNumeros(inputStr) {
    let numeros = inputStr.split(',').map(num => parseFloat(num.trim())).filter(n => !isNaN(n));
    
    if (numeros.length === 3) {
        let dobles = numeros.map(num => num * 2);
        console.log("Dobles:", dobles);
        return dobles;
    } else {
        console.log("No válido: ingresa exactamente 3 números separados por comas");
        return null;
    }
}

let resultado = procesarNumeros(input);
