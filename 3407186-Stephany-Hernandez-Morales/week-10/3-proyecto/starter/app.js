// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [completar con tu dominio]
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

// TODO: Renombrar con el nombre de tu dominio (en inglés, UPPER_SNAKE_CASE)
const DOMAIN_NAME = "E_COMMERCE_PRODUCTOS_DE_PAPELERIA";
const VALUE_LABEL = "Products";

// TODO: Ajustar al límite razonable para tu dominio
// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

// TODO: Definir el array con MÍNIMO 6 objetos
// Requisitos:
// - Mínimo 5 propiedades por objeto (tipos mixtos)
// - Al menos 1 propiedad numérica (para calcular estadísticas)
// - Al menos 1 propiedad booleana (para filtrar activos/inactivos)
// - Al menos 1 propiedad OPCIONAL (no todos los objetos la tienen)
//
// Nota para el aprendiz — Adaptaciones por dominio:
// - Biblioteca:    { id, title, author, year, pages, available, notes? }
// - Farmacia:      { id, name, price, stock, laboratory, active, prescription? }
// - Gimnasio:      { id, name, memberType, fee, joinDate, active, plan? }
// - Restaurante:   { id, name, category, price, calories, available, allergens? }
// - Banco:         { id, owner, type, balance, rate, active, creditLimit? }

const items = [
  // TODO: Reemplazar con objetos de tu dominio
  {
    id: 1,
    name: "Regla 30cm",
    price: 2_000,
    stock: 15,
    active: true,
    category: "Utiles escolares",
  },
  {
    id: 2,
    name: "Cuaderno A2",
    price: 4_000,
    stock: 25,
    active: true,
    category: "Utiles escolares",
    brand: "Norma",
  },
  {
    id: 3,
    name: "Colbon",
    price: 5_000,
    stock: 10,
    active: true,
    category: "Material de arte",
  },
  {
    id: 4,
    name: "Lápiz Grafito",
    price: 1_000,
    stock: 50,
    active: true,
    category: "Escritura",
    brand: "Faber-Castell",
  },
  {
    id: 5,
    name: "Borrador",
    price: 800,
    stock: 30,
    active: true,
    category: "Utiles escolares",
  },
  {
    id: 6,
    name: "Resma de papel bond",
    price: 15_000,
    stock: 0,
    active: false,
    category: "Papelería",
  },
  {
    id: 7,
    name: "Archivadores",
    price: 20_000,
    stock: 30,
    active: true,
    category: "Organizacion y archivo",
  },
  {
    id: 8,
    name: "Carpeta legajadora",
    price: 4_000,
    stock: 17,
    active: true,
    category: "Organizacion y archivo",
  },

  // TODO: Agregar al menos 3 objetos más (mínimo 6 en total)
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

/**
 * Agrega un nuevo elemento al array principal
 * @param {Object} item - El elemento a agregar
 */
const addItem = (item) => {
  // TODO: Implementar
  // 1. Verificar que no supere MAX_ITEMS (usar items.length)
  // 2. Agregar el item al array con .push()
  // 3. Mostrar confirmación con console.log y template literal

  if (items.length >= MAX_ITEMS) {
    console.log("No se pueden agregar más productos");
    return;
  }
  items.push(item);
  console.log(`Producto agregado: ${item.name}`);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} - El elemento encontrado o undefined
 */
const findById = (id) => {
  // TODO: Implementar usando .find()
  return items.find(item => item.id === id);
};

/**
 * Retorna todos los elementos activos
 * @returns {Object[]}
 */
const getActive = () => {
  // TODO: Implementar usando .filter() con la propiedad booleana
  return items.filter(item => item.active === true);
};

/**
 * Filtra elementos por el valor de un campo
 * @param {string} field - El nombre de la propiedad
 * @param {*} value - El valor a buscar
 * @returns {Object[]}
 */
const filterByField = (field, value) => {
  // TODO: Implementar usando .filter()
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

/**
 * Actualiza un elemento de forma inmutable usando spread
 * @param {number} id - Id del elemento a actualizar
 * @param {Object} changes - Objeto con los cambios a aplicar
 * @returns {Object[]} - Nuevo array con el elemento actualizado
 */
const updateItem = (id, changes) => {
  // TODO: Implementar
  // 1. Usar .map() para crear un nuevo array
  // 2. Para el item con el id buscado: retornar { ...item, ...changes }
  // 3. Para los demás: retornar el item sin cambios
  return items.map(item => 
    item.id === id ? { ...item, ...changes } : item);
  
  // reemplazar esta línea
};

/**
 * Calcula estadísticas de un campo numérico
 * @param {string} field - El nombre de la propiedad numérica
 * @returns {{ min: number, max: number, avg: number, total: number }}
 */
const calculateStats = (field) => {
  // TODO: Implementar
  // 1. Extraer los valores numéricos con Object.values o .map()
    const values = items.map(item => item[field]);
  // 2. Calcular: min (Math.min), max (Math.max), avg (sum/length), total (sum)
  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const min = Math.min(...values);
  const max = Math.max(...values);
  return { min, max, avg, total };
  // Pista: const values = items.map(i => i[field]);
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

/**
 * Formatea un elemento para mostrar en consola (una línea)
 * @param {Object} item - El elemento a formatear
 * @returns {string}
 */
const formatItem = (item) => {
  // TODO: Implementar usando template literals
  
  // 1. Usar .padEnd() o .padStart() para alinear columnas
  // 2. Usar ?? y ?. para propiedades opcionales
  // 3. Retornar string (NO hacer console.log aquí)

  return `[${item.id}] ${item.name.padEnd(20)} | $${String(item.price).padStart(6)} | Stock: ${(item.stock ?? 0).toString().padStart(3)} | ${item.active ? "ACTIVO" : "INACTIVO"} | Marca: ${item.brand ?? "N/A"}`;
};

/**
 * Genera el reporte completo del dominio
 * Usa: Object.entries, forEach, filter, map, calculateStats
 */

// TODO: Implementar
const buildReport = () => {
  // 1. Cabecera: título del dominio con template literal
  console.log("\n" + "=".repeat(40));
  console.log(`Reporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(40));

  // 2. Listado completo usando formatItem + forEach
  items.forEach(item => console.log(formatItem(item)));

  // 3. Sección de activos vs inactivos (getActive)
  const active = getActive();
  console.log("\nResumen de estado:");
  console.log(`  Activos: ${active.length}`);
  console.log(`  Inactivos: ${items.length - active.length}`);

  // 4. Estadísticas con calculateStats para la propiedad numérica
  const stats = calculateStats("price");

  console.log("\nEstadísticas:");
  console.log(`  Total: $${stats.total}`);
  console.log(`  Min: $${stats.min}`);
  console.log(`  Max: $${stats.max}`);
  console.log(`  Promedio: $${stats.avg.toFixed(2)}`);

  // 5. Propiedades del primer elemento con Object.entries
  console.log("\nPropiedades del primer producto:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
  });

  // 6. Pie de reporte con conteo total
  console.log("\nTotal productos:", items.length);
  console.log("=".repeat(40));
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================
//
// TODO: Descomentar a medida que implementes cada función
//
console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
const found = findById(1);
console.log("Encontrado id=1:", found?.name ?? "no encontrado");
console.log("");

// Paso 2: Listar activos
const active = getActive();
console.log(`Activos: ${active.length}`);
active.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 3: Filtrar por campo
const filtered = filterByField("category", "Utiles escolares");
console.log(`Filtro category: ${filtered.length} resultados`);
filtered.forEach(item => console.log(" ", formatItem(item)));
console.log("");

// Paso 4: Actualizar con spread
const updated = updateItem(1, { price: 3_000 });
console.log(`Actualizado id=1: price=${updated.find(i => i.id === 1)?.price}`);
console.log("");

// Paso 5: Estadísticas
const stats = calculateStats("price");
console.log(`Estadísticas (price): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
console.log("");

// Paso 6: Reporte completo
buildReport();

// TODO: Agregar un nuevo elemento usando addItem
addItem({ id: 9, name: "Marcador magico", price: 3_000, stock:30 , active: true, category: "Material de arte", brand: "Norma" });

// Paso 6: Reporte completo
buildReport();

// TODO: Agregar un nuevo elemento usando addItem
addItem({ id: 9, name: "Marcador magico", price: 3_000, stock:30 , active: true, category: "Material de arte", brand: "Norma" });


//seccion agregada rubrica

console.log("\nObject.keys del primer producto:");
console.log(Object.keys(items[0]));

console.log("\nObject.values del primer producto:");
console.log(Object.values(items[0]));

console.log("\nObject.hasOwn:");
console.log(`¿Tiene brand? ${Object.hasOwn(items[0], "brand")}`);
console.log(`¿Tiene stock? ${Object.hasOwn(items[0], "stock")}`);

const sortedByPrice = [...items].sort((a, b) => a.price - b.price);

console.log("\nProductos ordenados por precio (ASC):");
sortedByPrice.forEach(item => console.log(`  ${formatItem(item)}`));
