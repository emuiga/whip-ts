/**
 * NOTES: Primitive Types
 * Topic 6 — the basic building blocks of TypeScript's type system
 */


// ============================================================
// 1. TYPE ANNOTATIONS
// ============================================================

// You add a type by putting : TypeName after the variable name.

let name: string     = 'Alice';
let age: number      = 30;
let isAdmin: boolean = true;

// null and undefined are their own types:
let nothing: null     = null;
let notYet: undefined = undefined;


// ============================================================
// 2. TYPE INFERENCE — when you don't need to annotate
// ============================================================

// TypeScript is smart. If you assign a value immediately,
// it figures out the type on its own.

let city   = 'Nairobi';  // TypeScript infers: string
let score  = 100;        // TypeScript infers: number
let active = true;       // TypeScript infers: boolean

// city = 42;  ← ❌ error — TypeScript already knows city is a string

// Rule of thumb:
// If you're declaring AND assigning on the same line → let TypeScript infer.
// If you're declaring without a value → annotate explicitly.

let username: string;  // no value yet, needs annotation
username = 'Brian';    // fine


// ============================================================
// 3. FUNCTION ANNOTATIONS
// ============================================================

// Parameters and return types both get annotated.
// Syntax: (param: type): returnType

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return 'Hello, ' + name;
}

// void — for functions that don't return anything
function logMessage(message: string): void {
  console.log(message);
  // no return statement
}

// Arrow functions — same idea:
const multiply = (a: number, b: number): number => a * b;


// ============================================================
// 4. void vs undefined
// ============================================================

// void      → "this function doesn't return anything meaningful"
//             used as a return type on functions
// undefined → "this variable has no value yet"
//             used as a value type

function doNothing(): void { }       // correct for functions
let pending: undefined = undefined;  // correct for variables


// ============================================================
// 5. any — the escape hatch (avoid it)
// ============================================================

// `any` turns off type checking for that variable.
// TypeScript stops helping you.

let wild: any = 'hello';
wild = 42;          // fine — no error
wild = true;        // fine — no error
wild.toUpperCase(); // fine to TS — but crashes at runtime if wild is a number

// Only use `any` as a last resort. You lose all the benefits of TypeScript.


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: Do I always need to annotate every variable?
// A: No. Annotate when TypeScript can't infer — unassigned variables,
//    function parameters, and return types. Everywhere else, let it infer.

// Q: What's the difference between null and undefined?
// A: undefined = variable exists but has no value (JS default)
//    null = variable exists and has been explicitly set to "nothing"
//    In practice: use undefined for "not yet set", null for "intentionally empty"

// Q: Why annotate the return type if TypeScript can infer it?
// A: TypeScript CAN infer return types — but explicitly annotating is good
//    practice. It documents intent and catches bugs where you accidentally
//    return the wrong type.
