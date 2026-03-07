// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================


// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

const DOMAIN_NAME = "E-commerce Productos de Papelería";

// TODO: Cambia "Nombre del elemento" por algo de tu dominio
const itemName = "Kit de pinceles de acrílico";

// TODO: Agrega una categoría, tipo o descripción corta (string)
const itemCategory = "Artículos de arte";

// TODO: Agrega un número relevante a tu dominio (integer o decimal)
const itemQuantity = 40; // reemplaza 0 con el número adecuado

// TODO: Agrega un boolean con prefijo semántico (is/has/can/should)
const isItemAvailable = true; // reemplaza false con el valor adecuado

// TODO: Declara un valor null que signifique "no asignado aún"
const productDiscount = null; // cambia el nombre a algo de tu dominio


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// TODO: Muestra al menos 4 datos del dominio
// Usa console.log con template literals
// Ejemplo: console.log(`Título:     ${itemName}`);
console.log(`Nombre:     ${itemName}`);
console.log(`Categoría:  ${itemCategory}`);
// TODO: Agrega un console.log para itemQuantity
// TODO: Agrega un console.log para isItemAvailable
console.log(`Cantidad:   ${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);
console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

// TODO: Usa typeof para mostrar el tipo de al menos 3 variables
// Ejemplo: console.log("typeof itemName:    ", typeof itemName);
console.log("typeof itemName:     ", typeof itemName);
// TODO: Agrega typeof para otras 2 variables
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// TODO: Realiza al menos UNA conversión explícita
// Opciones:
//   a) Convertir un number a String() para mostrar con formato
//   b) Convertir un string a Number() para operar con él
//   c) Convertir cualquier valor a Boolean() y verificarlo

// TODO: Agrega tu conversión aquí
const quantityAsText = String(itemQuantity);
console.log("Cantidad como texto:", quantityAsText);
console.log("typeof (convertido):", typeof quantityAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
// TODO: Muestra el valor null y verifica con === null
console.log("--- Valor nulo ---");
// TODO: Agrega typeof y la verificación === null
console.log("Valor pendiente:", productDiscount);
console.log("typeof null:", typeof productDiscount);
console.log("¿Es null?:", productDiscount === null);

console.log("");

// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");
