// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "E-commerce productos de papeleria"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "Productos";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

  
  const items = [
    // TODO: Agrega al menos 5 objetos de tu dominio
    { id: 1, name: "Cuaderno de musica", category: "Cuadernos", price: 4_000, stock: 6, active: true },
    { id: 2, name: "Boligraos", category: "Utiles escolares", price: 1_000, stock: 4, active: true },
    { id: 3, name: "Cartulina", category: "Arte y diseño", price: 300, stock: 10, active: false },
    { id: 4, name: "Cinta adhesiva", category: "Adhesivos y pegamentos", price: 5_000, stock: 24, active: true },
    { id: 5, name: "Post-it", category: "Escritorio y organización", price: 5_000, stock: 19, active: true },
    { id: 6, name: "Sticky notes", category: "Escritorio y organización", price: 3_000, stock: 15, active: true },
    { id: 7, name: "Marcadores", category: "Utiles escolares", price: 2_000, stock: 8, active: true }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  
  // TODO: Usar push para agregar newItem al array items
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);

};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  // TODO: Usar pop para eliminar y retornar el último elemento
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
  // Guardar el resultado en una variable y mostrar el nombre
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  // TODO: Usar unshift para agregar priorityItem al inicio de items
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  // TODO: Usar splice para eliminar 1 elemento en la posición index
  // Mostrar el nombre del elemento eliminado
  const removed = items.splice(index, 1);
  console.log(`Eliminado: ${removed[0].name}`);
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  // TODO: Usar filter para retornar solo los elementos con la propiedad
  // booleana en true (ajusta el nombre de la propiedad a tu dominio)
  return items.filter(item => item.active === true && item.stock > 0);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  // TODO: Usar find para retornar el primer elemento cuyo name coincida
  return items.find(item => item.name === name);
};
  
/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  // TODO: Retornar un string con la información relevante del elemento
  // Usar template literals y mostrar las propiedades más importantes
  // Ejemplo (adaptar al dominio):
  // return `[${item.id}] ${item.name} — ...propiedades...`;
  return `[${item.id}] ${item.name} — Precio: $${item.price} — Stock: ${item.stock}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// TODO: Usar forEach para mostrar cada elemento con formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// TODO: Crear un nuevo elemento de tu dominio y usar addItem para agregarlo
// Ejemplo: addItem({ id: 6, name: "Nuevo Elemento", ..., active: true });
addItem({ id: 8, name: "Grapadora", category: "Escritorio y organización", price: 7_000, stock: 12, active: true });

// TODO: Usar addPriorityItem para agregar un elemento prioritario
addPriorityItem({ id: 9, name: "Marcador Permanente", category: "Utiles escolares", price: 10_000, stock: 5, active: true });

// TODO: Usar removeByIndex para eliminar un elemento del medio
removeByIndex(3);
// Ejemplo: removeByIndex(2);

// TODO: Usar removeLastItem para quitar el último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
// TODO: Mostrar el inventario actualizado con forEach + formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// TODO: Usar find para buscar un elemento específico por nombre
const foundItem = findByName("Post-it");
if (foundItem) {
  console.log(`Encontrado: ${formatItem(foundItem)}`);
} else {
  console.log("Elemento no encontrado");
}
// Mostrar el resultado

// TODO: Usar getActiveItems() y mostrar cuántos están activos
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

// TODO: Crear un snapshot inmutable con spread [...items]
const snapshot = [...items];
// y agregar un elemento extra sin modificar items
snapshot.push ({ id: 10, name: "Tijeras", category: "Utiles escolares", price: 4_000, stock: 20, active: true });

console.log(`Snapshot original: ${snapshot.length}`);
console.log(`Snapshot extendido: ${snapshot.length}`);

console.log("\n--- Transformación con map ---\n");

// TODO: Usar map para crear un array de solo los nombres de los elementos
// Mostrar los nombres
const itemNames = items.map(item => item.name);
console.log("Nombres de los productos:");
itemNames.forEach(name => console.log(`  - ${name}`));

// TODO: Usar map para crear un array con alguna propiedad numérica transformada
// (ej: precios con descuento, cantidades en otra unidad, etc.)

//Precios con descuento (10%)
const discountedPrices = items.map(item => {
  return {
    name: item.name,
    priceWithDiscount: item.price * 0.9
  };
});

console.log("\n Precios con 10% de descuento:");
discountedPrices.forEach(item => {
  console.log(`${item.name}: $${item.priceWithDiscount}`);
});

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
// TODO: mostrar total de activos vs total general
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
