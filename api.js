"use strict";

// Función para obtener un producto diferente de la API
const fetchProduct = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products/2'); // Cambié el ID del producto
        const json = await response.json();
        
        const product = {
            name: json.title,
            cost: json.price,
            details: json.description,
            category: json.category,
            imageUrl: json.image,
        };

        saveToLocalStorage(product);
    } catch (error) {
        console.error("Error fetching product:", error);
    }
};

// Guardar un objeto en Local Storage
const saveToLocalStorage = (data) => {
    localStorage.setItem('selectedProduct', JSON.stringify(data));
};

// Obtener un objeto del Local Storage
const retrieveFromLocalStorage = () => {
    const result = localStorage.getItem('selectedProduct') ? JSON.parse(localStorage.getItem('selectedProduct')) : "No hay datos disponibles";
    console.log(result);
};

// Eliminar un objeto en el Local Storage
const removeFromLocalStorage = () => {
    if (!localStorage.getItem('selectedProduct')) {
        console.log("No hay clave para eliminar");
    } else {
        localStorage.removeItem("selectedProduct");
    }
};

// Verificar si se eliminó correctamente
const verifyDeletion = () => {
    if (!localStorage.getItem("selectedProduct")) {
        console.log("La clave 'selectedProduct' se eliminó completamente");
    } else {
        console.log("La clave 'selectedProduct' aún existe");
    }
};

// Ejecución de las funciones
fetchProduct().then(() => {
    retrieveFromLocalStorage();
    removeFromLocalStorage();
    verifyDeletion();
});

// Módulos
// ES Modules 
import { applyDiscount } from "./module.js"; 

applyDiscount(1500, 0.15); // 