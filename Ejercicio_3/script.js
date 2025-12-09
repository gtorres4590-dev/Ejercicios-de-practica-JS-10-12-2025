function sumAndProduct() {
    
    let input = prompt("Escribe 3 números separados por comas (e.g., 1,2,3):");
    let numArray = input.split(',').map(Number);  
    let sum = numArray.reduce((acc, curr) => acc + curr, 0);
    let product = numArray.reduce((acc, curr) => acc * curr, 1);
    return { sum, product, numArray };
}

const { sum, product, numArray } = sumAndProduct();
console.log("Given the array", numArray);
console.log("The sum is " + sum);
console.log("The product is " + product);