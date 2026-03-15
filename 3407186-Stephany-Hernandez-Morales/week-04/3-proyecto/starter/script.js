// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
// 🎯 OBJETIVO: Construir un generador de mensajes
//    en consola usando métodos de string y
//    template literals.
//
// 📋 TU DOMINIO: Adapta cada TODO al dominio
//    que te fue asignado por el instructor.
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe
//    ser única y coherente con tu dominio.
//    Usa dominios no asignables como referencia
//    conceptual, pero NO copies valores.
//
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define el nombre de tu dominio
const DOMAIN_NAME = "E-commerce productos de papelería";

// TODO: Define el nombre de la entidad principal
// Inclúyelo con espacios y mayúsculas/minúsculas
// para poder aplicar transformaciones después
const RAW_ENTITY_NAME = "  Cuaderno Profesional Cuadriculado  ";

// TODO: Define una categoría o tipo (string)
const ENTITY_CATEGORY = "Utiles Escolares";

// TODO: Define un código identificador (string)
// Elige un prefijo coherente con tu dominio
const ENTITY_CODE = "PAP-001";

// TODO: Define una descripción corta (string)
// Debe contener varias palabras para usar includes/slice
const ENTITY_DESCRIPTION =
  "Cuaderno profesional ideal para estudiantes y oficina con hojas de alta calidad.";

// TODO: Define un dato numérico relevante (number)
const MAIN_VALUE = 20_000; //Cantidad de productos

// TODO: Define un estado booleano
const IS_ACTIVE = true; // indica si el producto está disponible

// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// TODO: Limpia el nombre con trim()
const ENTITY_NAME = RAW_ENTITY_NAME.trim();
console.log(ENTITY_NAME);

// TODO: Obtén el nombre en mayúsculas para el encabezado
const ENTITY_NAME_UPPER = ENTITY_NAME.toUpperCase();
console.log(ENTITY_NAME_UPPER);

// TODO: Obtén el nombre en minúsculas para el código
const ENTITY_NAME_LOWER = ENTITY_NAME.toLowerCase();
console.log(ENTITY_NAME_LOWER);

// TODO: Extrae las primeras letras del código con slice()
// para usarlas como prefijo de reference
const CODE_PREFIX = ENTITY_CODE.slice(0, 3);
console.log(CODE_PREFIX);

// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// TODO: Verifica si el código empieza con el prefijo correcto
// Usa startsWith() con el prefijo que definiste
const HAS_VALID_PREFIX = ENTITY_CODE.startsWith(CODE_PREFIX);

// TODO: Verifica si la descripción contiene una palabra clave
// Usa includes() con una palabra importante de tu dominio
const DESCRIPTION_IS_RELEVANT = ENTITY_DESCRIPTION.includes("calidad");

// TODO: Verifica si el código termina con los dígitos
// Usa endsWith() con algo coherente de tu dominio
const HAS_VALID_SUFFIX = ENTITY_CODE.endsWith("001");

// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const SEPARATOR = "=".repeat(45);
const SUB_SEPARATOR = "-".repeat(45);

// TODO: Construye la ficha multilínea usando template literals
// Usa TODAS las variables transformadas arriba
const mainCard = `
${SEPARATOR}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${SEPARATOR}
Nombre:      ${ENTITY_NAME_UPPER}
Categoría:   ${ENTITY_CATEGORY}
Código:      ${ENTITY_CODE}
Prefijo:     ${CODE_PREFIX}
Precio:      $${MAIN_VALUE.toLocaleString("es-CO")}
Estado:      ${IS_ACTIVE ? "Activo" : "Inactivo"}

${SUB_SEPARATOR}
Descripción:
${ENTITY_DESCRIPTION}
${SEPARATOR}
`;

console.log(mainCard);

//Valor:       ${MAIN_VALUE}

// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");
// TODO: Muestra los resultados de las validaciones con template literals
console.log(`¿Código empieza con '${CODE_PREFIX}'?: ${HAS_VALID_PREFIX}`);
console.log(`¿Descripción contiene 'calidad'?: ${DESCRIPTION_IS_RELEVANT}`);
console.log(`¿Código termina con '001'?: ${HAS_VALID_SUFFIX}`);
console.log("");

// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

// TODO: Construye un mensaje corto de una línea
// Usa template literal con el nombre limpio y el código
const notification = `📢 Nuevo producto disponible: ${ENTITY_NAME} (${ENTITY_CODE})`;
console.log(notification);
console.log("");
