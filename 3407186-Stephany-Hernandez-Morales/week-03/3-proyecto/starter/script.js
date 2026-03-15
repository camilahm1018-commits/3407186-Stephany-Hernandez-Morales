// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio

const BOOKMARK_QUANTITY = 50; // Cantidad de marcadores
const BOOKMARK_PRICE = 15_000; // Precio de marcadores

console.log(`Cantidad de marcadores: ${BOOKMARK_QUANTITY}`);
console.log(`Precio: $${BOOKMARK_PRICE.toLocaleString("es-CO")}`);
console.log("");

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

const INVENTORY = BOOKMARK_PRICE * BOOKMARK_QUANTITY;
console.log(`Inventario: $${INVENTORY.toLocaleString("es-CO")}`);
console.log("");

const SOLD = 15;
const REMAINING_UNITS = BOOKMARK_QUANTITY - SOLD;
console.log("Unidades Restantes: ", REMAINING_UNITS);
console.log("");

const NOTEBOOK_QUANTITY = 40;
const TOTAL_PRODUCTS = REMAINING_UNITS + NOTEBOOK_QUANTITY;
console.log("Cantidad total de productos:", TOTAL_PRODUCTS);
console.log("");

const UNIT_PRICE = INVENTORY / BOOKMARK_QUANTITY;
console.log(`Precio por unidad: $${UNIT_PRICE.toLocaleString("es-CO")}`);
console.log("");

const LEFTOVER = BOOKMARK_QUANTITY % 3;
console.log("Marcadores que sobran en paquetes de 3:", LEFTOVER);
console.log("");

const PRICE_SQUARED = BOOKMARK_PRICE ** 2;
console.log(
  `Precio del marcador al cuadrado: $${PRICE_SQUARED.toLocaleString("es-CO")}`,
);
console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

let fileQuantity = 0;

fileQuantity += 100;
console.log("Carpetas añadidas: ", fileQuantity);

fileQuantity -= 30;
console.log("Carpetas vendidas: ", fileQuantity);

fileQuantity *= 0.4; //Quedan el 40% de las carpetas
console.log("Cantidad restante: ", fileQuantity);

fileQuantity /= 4;
console.log("Grupos de carpetas: ", fileQuantity);

console.log("Cantidad actual de carpetas:", fileQuantity);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

const IS_FULL_STOCK = BOOKMARK_QUANTITY === 50;
console.log("¿Cantidad de marcadores es igual a 50?", IS_FULL_STOCK); // 50 === 50
console.log("");

const DIFFERENT_QUANTITY = NOTEBOOK_QUANTITY !== BOOKMARK_QUANTITY;
console.log(
  "¿Los cuadernos y marcadores tienen cantidades diferentes?",
  DIFFERENT_QUANTITY,
); // 40 !== 50
console.log("");

const BOOKMARK_INVENTORY = INVENTORY > 500_000;
console.log("¿El inventario supera $500.000?", BOOKMARK_INVENTORY); // 750_000 > 500_000
console.log("");

const IS_CHEAP = BOOKMARK_PRICE < 20_000;
console.log("¿El marcador cuesta menos de $20.000?", IS_CHEAP); // 15_000 < 20_000
console.log("");
const NOTEBOOK_PRICE = 8_000;
const NOTEBOOK_INVENTORY = BOOKMARK_PRICE >= NOTEBOOK_PRICE;
console.log(
  "¿El precio del marcador es mayor o igual al del cuaderno?",
  NOTEBOOK_INVENTORY,
); // 15_000 >= 8_000
console.log("");

const IS_CHEAPER = BOOKMARK_PRICE <= 20_000;
console.log("¿El marcador cuesta menor o igual a $20.000?", IS_CHEAPER); //15_000 <= 20_000
console.log("");

const IS_LESS_STOCK = REMAINING_UNITS <= BOOKMARK_QUANTITY;
console.log(
  "¿Las unidades restantes son menores o igual al stock inicial?",
  IS_LESS_STOCK,
); // 35 <= 50
console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

const IS_DISCOUNTED = IS_FULL_STOCK && INVENTORY > 400_000;
console.log(
  "¿Hay 50 marcadores y el inventario es mayor que 400_000?",
  IS_DISCOUNTED,
);
console.log("");

const PRODUCTS = TOTAL_PRODUCTS > 45 || REMAINING_UNITS < 30;
console.log(
  "¿Hay más de 45 productos o quedan menos de 30 marcadores?",
  PRODUCTS,
);
console.log("");

//PARA QUE DE FALSE
const NOT_CHEAP = !IS_CHEAP;
console.log("¿El marcador NO es barato?", NOT_CHEAP);
console.log("");

//PARA QUE DE TRUE 
const IS_OUT_OF_STOCK = BOOKMARK_QUANTITY === 0; // 50 === 0 → false
const NOT_OUT_OF_STOCK = !IS_OUT_OF_STOCK;
console.log("¿El marcador NO está agotado?", NOT_OUT_OF_STOCK); // !false → true
console.log("");

//COMBINACIÓN
const GOOD_STORE =
  IS_FULL_STOCK && (INVENTORY > 600000 || BOOKMARK_PRICE > 20000);
console.log("¿La tienda tiene buen estado de venta?", GOOD_STORE);

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log(`Marcadores iniciales: ${BOOKMARK_QUANTITY}`);
console.log(`Precio del marcador: $${BOOKMARK_PRICE.toLocaleString("es-CO")}`);

console.log(
  `Valor total del inventario: $${INVENTORY.toLocaleString("es-CO")}`,
);
console.log(`Marcadores vendidos: ${SOLD}`);
console.log(`Marcadores restantes: ${REMAINING_UNITS}`);

console.log(`Cantidad total de productos: ${TOTAL_PRODUCTS}`);

console.log("Cantidad actual de carpetas:", fileQuantity);

console.log("¿La tienda tiene buen estado de venta?", GOOD_STORE);
console.log("");
