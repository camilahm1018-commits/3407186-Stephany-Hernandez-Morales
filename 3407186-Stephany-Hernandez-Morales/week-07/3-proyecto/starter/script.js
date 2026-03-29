// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [E-commerce Productos de papeleria]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
// Ejemplo: const TAX_RATE = 0.19;
//          const CURRENCY = "USD";
//          const DOMAIN_NAME = "Mi Dominio";
const DOMAIN_NAME = "E-commerce Productos de papelería"; // Ej: "Biblioteca", "Farmacia", "Gimnasio", etc.
const VALUE_LABEL = "precio"; // Ej: "precio", "cantidad", "duración"


// TODO: Define un array con al menos 5 elementos de tu dominio.
// Cada elemento debe ser un objeto con propiedades relevantes.
// Ejemplo (Biblioteca):
// const items = [
//   { id: 1, name: "El Quijote",  category: "clásico",    value: 15,  active: true },
//   { id: 2, name: "1984",        category: "distopía",   value: 12,  active: true },
//   ...
// ];
const items = [
    { id: 1, name: "Cuaderno A5", category: "Cuadernos", value: 3_000, quantity: 2, active: true },
    { id: 2, name: "Lápiz HB", category: "Utiles escolares", value: 1_500, quantity: 5, active: true },
    { id: 3, name: "Pinturas", category: "Arte y diseño", value: 5_000, quantity: 7, active: true },
    { id: 4, name: "Regla 30cm", category: "Utiles escolares", value: 2_000, quantity: 9, active: true },
    { id: 5, name: "Calculadora científica", category: "Electrónica", value: 25_000, quantity: 10, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// TODO: Implementa una arrow function que reciba un elemento
// y devuelva un string formateado para mostrar en pantalla.
// Debe usar template literals y al menos 2 propiedades del elemento.
//
// Ejemplo (Biblioteca):
// const formatItem = (book) =>
//   `📚 ${book.name} [${book.category}] — $${book.value}`;
//
// Ejemplo (Farmacia):
// const formatItem = (medicine) =>
//   `💊 ${medicine.name} — Stock: ${medicine.stock} — $${medicine.price}`;

const formatItem = (product) => {
  // TODO: Implementar usando template literals
  // 1. Incluir el nombre del elemento
  // 2. Incluir la categoría o tipo
  // 3. Incluir el valor numérico relevante
  return `Producto: ${product.name} [${product.category}] — Precio: $${product.value}`; // TODO: Expandir este template
};

  // ============================================
  // SECCIÓN 3: Función de cálculo (pura)
  // ============================================

  // TODO: Implementa una función pura que calcule algún valor relevante
  // del dominio a partir de parámetros numéricos.
  // Debe ser una función pura: mismo input → siempre mismo output.
  //
  // Ejemplo (Biblioteca): calcular multa por días de retraso
  // const calculateValue = (baseValue, factor) => baseValue * factor;
  //
  // Ejemplo (Farmacia): calcular total de compra con descuento
  // const calculateValue = (price, quantity, discountPct = 0) =>
  //   +(price * quantity * (1 - discountPct / 100)).toFixed(2);

  const calculateValue = (price, quantity, discountPct = 30) => price * quantity * (1 - discountPct / 100);


// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// TODO: Implementa una función que reciba un elemento y devuelva
// true o false según una regla del dominio.
//
// Ejemplo (Biblioteca): verificar si el libro está disponible
// const isValid = (book) => book.available === true;
//
// Ejemplo (Farmacia): verificar si hay suficiente stock
// const isValid = (medicine) => medicine.stock > 0;
//
// Ejemplo (Gimnasio): verificar si el miembro está activo
// const isValid = (member) => member.active === true;

const isValid = (product) => {
  return product.active === true && product.quantity > 0;
};
  // TODO: Implementar la condición de validez de tu dominio

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// TODO: Implementa una función que use al menos un parámetro
// por defecto significativo para tu dominio.
//
// Ejemplo (Biblioteca): crear un registro con valores por defecto
// const createRecord = (name, category = "general", available = true) =>
//   ({ name, category, available });
//
// Ejemplo (Farmacia): formatear precio con moneda por defecto
// const formatPrice = (price, currency = "USD", showTax = false) =>
//   showTax ? `${currency} ${(price * 1.19).toFixed(2)}` : `${currency} ${price.toFixed(2)}`;
const CURRENCY = "$";

const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) => {
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

// TODO: Genera un reporte completo usando las funciones anteriores.
// Debe:
// 1. Mostrar el título del dominio
// 2. Recorrer items con for...of y mostrar cada uno con formatItem()
// 3. Contar los elementos válidos con isValid()
// 4. Calcular el total o promedio con calculateValue()
// 5. Mostrar el resumen final con formatWithDefault()

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

// TODO: Reemplaza este código de ejemplo con la implementación real

if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const product of items) {
    // TODO: Usa formatItem(product) para mostrar cada elemento
    console.log(`  ${lineNumber}. ${formatItem(product)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const product of items) {
    // TODO: Usa isValid(product) para contar los válidos
    if (isValid(product)) {
      validCount++;
    }
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const product of items) {
    // TODO: Usa calculateValue() con las propiedades de tu product
    totalValue += calculateValue(product.value, product.quantity);
  }
  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);
