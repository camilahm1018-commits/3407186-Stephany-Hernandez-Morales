// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "E-commerce productos de papeleria";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "productos";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
  { id: 1,name: "Cuaderno A5",price: 5_000,stock: 10,active: true,brand: "Norma",},
  { id: 2, name: "Lápiz HB", price: 1_000, stock: 50, active: true },
  { id: 3,name: "Borrador",price: 800,stock: 20,active: true,brand: "Pelikan",},
  { id: 4, name: "Cartulina", price: 1_500, stock: 0, active: false },
  { id: 5,name: "Marcadores",price: 4_000,stock: 12,active: true,brand: "Sharpie",},
  { id: 6, name: "Cinta adhesiva", price: 3_000, stock: 5, active: true },
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
  });

  // Alinear las claves con padEnd para formato de tabla
};
/**
 * Calcula estadísticas numéricas del catálogo
 * @param {string} numericKey - El nombre de la propiedad numérica a analizar
 */
const calculateStats = (numericKey) => {
  const values = items.map(
    (item) => Object.values(item)[Object.keys(item).indexOf(numericKey)],
  );

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log(`\n📊 Estadísticas de ${numericKey}:`);
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Precio: $${item.price}`);
  console.log(`Stock: ${item.stock}`);
  console.log(`Activo: ${item.active}`);

  if (Object.hasOwn(item, "brand")) {
    console.log(`Marca: ${item.brand}`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
  // TODO: Usar for...in + Object.hasOwn() para recorrer propiedades propias
  // Imprimir cada clave y su valor
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  // TODO: Retornar un nuevo objeto usando spread + changes
  // El objeto original NO debe modificarse
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  // TODO: Usar filter() por la propiedad booleana de tu dominio
  return items.filter((item) => item.active);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Usar find()
  return items.find(item => item.id === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,priceWithTax: item.price * 1.19
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
};

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  // TODO: Mostrar cantidad total de elementos
  console.log(`Total: ${items.length}`);
  // TODO: Mostrar cuántos están disponibles/activos
  const active = getAvailable();
    console.log(`Activos: ${active.length}`);
  // TODO: Mostrar estadísticas de la propiedad numérica principal
  calculateStats("price");

  // TODO: Listar todos los elementos ordenados (usar sortByNumericProp)
  const sorted = sortByNumericProp(true);
  sorted.forEach(item => {
    console.log(`${item.name} - $${item.price}`);
  });
  // TODO: Mostrar el elemento con el valor numérico más alto y más bajo

  const max = sorted[sorted.length - 1];
  const min = sorted[0];

  console.log(`\nMás caro: ${max.name}`);
  console.log(`Más barato: ${min.name}`);
  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

// TODO: Llamar a las funciones implementadas en este orden:
// 1. inspectItem(items[0])
inspectItem(items[0]);
// 2. calculateStats("nombreDeTuPropiedadNumerica")/estadisticas
calculateStats("price");
// 3. items.forEach(showWithOptionals)
items.forEach(showWithOptionals);
// 4. printAllProperties(items[0])
printAllProperties(items[0]);
// 5. Demostrar updateItem con un ejemplo
const updated = updateItem(items[0], { price: 9999 });
console.log(updated);
// 6. Mostrar elementos disponibles con getAvailable()
console.log(getAvailable());
// 7. Demostrar findById con un id válido y uno inexistente
console.log(findById(2));
console.log(findById(9));
// 8. Mostrar addCalculatedProp()
console.log(addCalculatedProp());
// 9. Mostrar sortByNumericProp()
console.log(sortByNumericProp());
// 10. buildReport()
buildReport();


