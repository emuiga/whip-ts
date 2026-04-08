/**
 * Exercise 05 — Type Inference & Compatibility
 *
 * Reference: notes-05-type-inference.ts
 * Run with: npx ts-node 05-type-inference.ts
 */


// ============================================================
// EXERCISE 1 — Inference vs annotation
// ============================================================

// Task 1a: Declare the following WITHOUT type annotations.
//          Hover over each variable in VSCode to confirm what TypeScript infers.
//          - a variable assigned the string 'Nairobi'
//          - a variable assigned the number 4500
//          - a variable assigned false
//          - a variable from: [1, 2, 3].map(n => n * 2)

// Task 1b: Declare an empty array `fleet` that will hold strings.
//          You MUST annotate this one. Explain in a comment why.


// ============================================================
// EXERCISE 2 — When inference is too broad
// ============================================================

// Task 2a: Declare a variable `direction` and assign it 'north'.
//          Then try to use it as a value of type:
//          type Heading = 'north' | 'south' | 'east' | 'west'
//          in a function that only accepts Heading.
//
//          Write the function `setHeading(h: Heading): void` that logs h.
//          Try calling setHeading(direction) — read the TypeScript error.
//
//          Fix it by annotating direction as Heading from the start.

// Task 2b: Declare a config object:
//          const config = { theme: 'dark', language: 'en' }
//          Hover over `theme` — what type does TypeScript infer? (string or 'dark'?)
//          Now redeclare it with `as const` and hover again. What changes?


// ============================================================
// EXERCISE 3 — Structural typing
// ============================================================

// Task 3: Define this interface:
//         interface Printable { name: string; email: string }
//
//         Write a function `printContact(p: Printable): void` that logs name and email.
//
//         Create an object `employee` with fields: name, email, department, salary.
//         Call printContact(employee) — does TypeScript accept it even though
//         employee has extra fields? Why?
//
//         Write your answer as a comment.


// ============================================================
// EXERCISE 4 — Putting it together
// ============================================================

// Task 4: Below is a set of bookings. Do NOT add type annotations to the array —
//         let TypeScript infer everything.

const bookings = [
  { id: 1, customer: 'Alice',   amount: 12000, status: 'confirmed' },
  { id: 2, customer: 'Brian',   amount: 4500,  status: 'pending'   },
  { id: 3, customer: 'Cynthia', amount: 18000, status: 'confirmed' },
];

// Task 4a: Hover over `bookings` in VSCode. What type does TypeScript infer?
//          Write the inferred type as a comment.

// Task 4b: Use .filter() to get confirmed bookings. Store in `confirmed`.
//          Hover over `confirmed` — what type does TypeScript infer?

// Task 4c: Use .map() to get an array of amounts from confirmed bookings.
//          Hover over the result — what type does TypeScript infer?

// Task 4d: Use .reduce() to calculate total revenue from confirmed bookings.
//          Log the result.
