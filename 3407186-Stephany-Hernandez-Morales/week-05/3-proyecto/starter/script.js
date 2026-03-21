// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const elementName = "Archivador de palanca";      // TODO: nombre del elemento (string)
const elementStatus = "active";                     // TODO: estado actual (string: "active", "inactive", etc.)
const elementValue = 70;                            // TODO: valor numérico para clasificar (ocupación, stock, puntaje…)
const elementType = "Archivo y documentación";      // TODO: tipo o categoría (string)
const elementInfo ={                                // TODO: objeto con información adicional opcional (puede ser null)
    price: 15000,
    discount: null

}; 


// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.


let classification = "Sin clasificar"; // TODO: implementar if/else if/else
    if (elementValue >= 100) {
        classification = "Alto";        
    } else if (elementValue >= 50) {
        classification = "Medio";       
    } else if (elementValue >= 20) {
        classification = "Bajo";        
    } else {
        classification = "Muy bajo";
    }


// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";  // TODO: implementar con ternario
// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }

let typeLabel = "Sin tipo"; // TODO: implementar con switch

switch (elementType) {
    case "Utiles de oficina":
        typeLabel = "Utiles de oficina";
        break;
    case "Archivo y documentación":
        typeLabel = "Archivo y documentación";
        break;
    case "Tecnología":
        typeLabel = "Tecnología";
        break;
    default:
        typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

const displayName = elementName ?? "Sin nombre";                                         // TODO: elementName ?? "Sin nombre"
const infoDetail = elementInfo?.discount?? "Sin descuento";       // TODO: elementInfo?.detail ?? "Sin información adicional"

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

const safeProperty = elementInfo?.brand ?? "Marca no especificada"; // TODO: elementInfo?.tuPropiedad ?? "valor por defecto"
//const priceProperty = elementInfo?.price ?? "Precio no especificado";  //Esto es otro ejemplo con el ?
// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);
//console.log(`Propiedad adicional: ${priceProperty}`);
console.log("=".repeat(40));
