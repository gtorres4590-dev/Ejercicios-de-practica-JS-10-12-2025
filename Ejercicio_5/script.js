// 1. Array inicial con 5 personas
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log("=== PERSONAS INICIALES ===");
people.forEach(persona => console.log(`- ${persona}`));

// 2 & 3. Remover "Dani" y "Juan" usando splice con indexOf
console.log("\n=== ELIMINANDO PERSONAS ===");
const indexDani = people.indexOf("Dani");
if (indexDani !== -1) {
    people.splice(indexDani, 1);
    console.log("✓ Dani eliminado");
}

const indexJuan = people.indexOf("Juan");
if (indexJuan !== -1) {
    people.splice(indexJuan, 1);
    console.log("✓ Juan eliminado");
}

// 4. Mover "Luis" a la posición 0 (frente del array)
console.log("\n=== MOVIENDO LUIS AL FRENTE ===");
const luisIndex = people.indexOf("Luis");
if (luisIndex !== -1) {
    const luis = people.splice(luisIndex, 1)[0]; // Extrae Luis
    people.unshift(luis); // Inserta al inicio
    console.log("✓ Luis movido al frente");
}

// 5. Agregarme "Neal" al final del array
console.log("\n=== AGREGANDO NUEVA PERSONA ===");
people.push("Neal");
console.log("✓ Neal agregado al final");

// 6. Iterar y salir después de console.log "Maria"
console.log("\n=== BUSCANDO MARIA (con break) ===");
for (const persona of people) {
    console.log(`Encontré: ${persona}`);
    if (persona === "Maria") {
        console.log("→ ¡Maria encontrada! Saliendo del loop.");
        break;
    }
}

// 7. Encontrar posición de "Maria"
console.log("\n=== RESULTADOS FINALES ===");
const posicionMaria = people.indexOf("Maria");
console.log(` Maria está en la posición: ${posicionMaria}`);

console.log("\n Array final (4 personas):", people);
console.log(`Total de personas: ${people.length}`); // Verificación: debe ser 4
