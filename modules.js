// CommonJS
const verificarStock = (productoId, cantidadSolicitada) => {
    if (cantidadSolicitada <= 0) {
        return console.log("La cantidad solicitada debe ser mayor que cero.");
    }
    console.log(`Comprobando la disponibilidad del producto con ID ${productoId}...`);
    // Simulación de verificación de stock
    const stockDisponible = 100; 
    if (cantidadSolicitada > stockDisponible) {
        console.log(`No hay suficiente stock para el producto ID ${productoId}. Solo hay ${stockDisponible} unidades disponibles.`);
    } else {
        console.log(`Hay suficiente stock para el producto ID ${productoId}.`);
    }
};

module.exports = verificarStock;

// ES Modules 
export const calcularImpuesto = (precioBase, tasaImpuesto) => {
    const impuesto = precioBase * tasaImpuesto;
    const precioFinal = precioBase + impuesto;
    console.log(`El precio final, incluyendo un impuesto del ${tasaImpuesto * 100}%, es de: ${precioFinal}$`);
};