/**
 * NOTES: Typing Functions
 * Topic 11 — full function type coverage: params, return types, overloads, expressions
 */


// ============================================================
// 1. PARAMETER AND RETURN TYPES (RECAP + EXPAND)
// ============================================================

// Basic:
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function:
const multiply = (a: number, b: number): number => a * b;

// void return — function doesn't return anything meaningful:
function log(message: string): void {
  console.log(message);
}


// ============================================================
// 2. OPTIONAL PARAMETERS (?)
// ============================================================

// Add ? after parameter name to make it optional.
// Optional params must come AFTER required params.

function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}

greet('Alice');          // fine — title is undefined
greet('Alice', 'Dr.');   // fine — title is 'Dr.'

// Inside the function, title is type: string | undefined
// That's why we check `if (title)` before using it.


// ============================================================
// 3. DEFAULT PARAMETER VALUES
// ============================================================

// Provide a fallback value — TypeScript infers the type from the default.

function createBooking(customer: string, days: number = 1): string {
  return `${customer} — ${days} day(s)`;
}

createBooking('Alice');     // days defaults to 1
createBooking('Alice', 3);  // days is 3

// Default params are automatically optional — no ? needed.
// Don't use both ? and a default on the same param.


// ============================================================
// 4. REST PARAMETERS
// ============================================================

// Collect any number of arguments into a typed array.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sumAll(1, 2, 3);          // 6
sumAll(10, 20, 30, 40);   // 100

// Rest param must be the LAST parameter:
function logItems(label: string, ...items: string[]): void {
  console.log(label + ':', items.join(', '));
}

logItems('Vehicles', 'Toyota', 'Nissan', 'Subaru');


// ============================================================
// 5. FUNCTION TYPE EXPRESSIONS
// ============================================================

// You can describe the TYPE of a function itself — useful for callbacks.

// Inline:
function runTwice(fn: (n: number) => number, value: number): number {
  return fn(fn(value));
}

runTwice(n => n * 2, 3); // 12

// As a type alias:
type Formatter  = (value: number) => string;
type Callback   = (error: string | null, result?: string) => void;

const formatKES: Formatter = (value) => `KES ${value.toLocaleString()}`;

// In React, event handler types look like this:
// type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;


// ============================================================
// 6. OVERLOADS (LIGHT TOUCH)
// ============================================================

// Function overloads let you describe a function that behaves differently
// depending on the input types. TypeScript picks the right signature.

function formatValue(value: number): string;
function formatValue(value: string): string;
function formatValue(value: number | string): string {
  if (typeof value === 'number') {
    return `KES ${value.toLocaleString()}`;
  }
  return value.toUpperCase();
}

formatValue(12000);    // 'KES 12,000'
formatValue('hello');  // 'HELLO'

// You won't write overloads often — but you'll SEE them in library type definitions.


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: What's the difference between optional param (?) and default param?
// A: Optional (?) → caller can omit it; inside the function, value is string | undefined
//    Default (= 'value') → caller can omit it; inside the function, value is always the type
//    Use default when you have a sensible fallback. Use ? when undefined is meaningful.

// Q: Can I type a function that accepts a callback?
// A: Yes — use a function type expression as the parameter type:
//    function process(data: string, onDone: (result: string) => void): void
//    This is common in event handlers and async utilities.

// Q: What does => void mean in a function type?
// A: The function returns nothing (void). It's the return type of the function type.
//    (n: number) => void  means: accepts a number, returns nothing.
//    (n: number) => number means: accepts a number, returns a number.
