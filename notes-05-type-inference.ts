/**
 * NOTES: Type Inference & Compatibility
 * Topic 10 — when TypeScript figures it out, and when you need to help it
 */


// ============================================================
// 1. TYPE INFERENCE — what TypeScript deduces automatically
// ============================================================

// TypeScript infers types from values assigned at declaration time.

let name    = 'Alice';   // inferred: string
let age     = 30;        // inferred: number
let active  = true;      // inferred: boolean
let nothing = null;      // inferred: null

// Inferred from function return:
function double(n: number) {
  return n * 2;  // return type inferred as number — no annotation needed
}

// Inferred from array contents:
const ids = [1, 2, 3];         // inferred: number[]
const tags = ['ts', 'react'];  // inferred: string[]

// Inferred inside .map():
const doubled = ids.map(n => n * 2); // inferred: number[]


// ============================================================
// 2. WHEN TO ANNOTATE EXPLICITLY
// ============================================================

// 1. Variable declared without a value:
let username: string;       // must annotate — nothing to infer from
username = 'Brian';

// 2. Function parameters — TypeScript CANNOT infer these:
function greet(name: string): string {  // both are required
  return 'Hello, ' + name;
}

// 3. When inference gives you too broad a type:
const status = 'pending';
// inferred as: string (broad)
// but you probably want:
const status2: 'pending' | 'confirmed' | 'cancelled' = 'pending';
// now TypeScript enforces only valid values

// 4. Empty arrays — TypeScript can't infer element type:
const items: string[] = [];  // must annotate — no elements to infer from
// const items = [];  ← inferred as never[] which is useless


// ============================================================
// 3. TYPE WIDENING
// ============================================================

// TypeScript sometimes infers a broader type than you expect.

const x = 'hello';    // inferred as string literal type 'hello' (narrow)
let y   = 'hello';    // inferred as string (wide) — let can be reassigned

// const = narrow (can't change) → TypeScript locks to the exact value
// let   = wide (can change)   → TypeScript uses the general type

// This matters with objects:
const config = { theme: 'dark' };
// theme is inferred as string, NOT the literal 'dark'
// because object properties can be reassigned

// To get the narrow literal type:
const config2 = { theme: 'dark' } as const;
// now theme is inferred as the literal 'dark' — can't be changed


// ============================================================
// 4. as const — freezing types
// ============================================================

// `as const` makes everything in an object or array a literal type
// and marks all fields as readonly.

const VEHICLE_STATUSES = ['available', 'rented', 'maintenance'] as const;
// inferred as: readonly ['available', 'rented', 'maintenance']
// NOT string[] — the exact values are locked in

type VehicleStatus = typeof VEHICLE_STATUSES[number];
// VehicleStatus = 'available' | 'rented' | 'maintenance'
// Clean pattern: define values once, derive the type from them


// ============================================================
// 5. STRUCTURAL TYPING — shape, not name
// ============================================================

// TypeScript checks if the SHAPE of an object matches, not its name.
// This is different from many other typed languages.

interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point): void {
  console.log(`${p.x}, ${p.y}`);
}

const coord = { x: 10, y: 20, z: 5 }; // has extra field z
printPoint(coord); // FINE — it has x and y, which is all Point needs
// Extra fields are allowed when passing an existing variable.
// Only object literals directly passed in are checked strictly.


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: If TypeScript can infer return types, should I still annotate them?
// A: Yes, for non-trivial functions. It documents intent and catches cases
//    where you accidentally return the wrong type or forget a return path.

// Q: What's the difference between type inference and any?
// A: Inference → TypeScript still knows the type, just figured it out itself.
//    any → TypeScript gives up and stops checking. Inference is safe. any is not.

// Q: When does TypeScript give me a 'never' type?
// A: never means "this value can never exist". Comes up in:
//    - Empty arrays with no annotation: const x = [] → never[]
//    - Exhaustive checks (all union cases handled)
//    - Functions that always throw or never return
