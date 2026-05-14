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

//solution
// let province = 'Nairobi';
// let namba = 4500;
// let ukweli = false;

// let test = [1, 2, 3].map(n => n * 2);

// Task 1b: Declare an empty array `fleet` that will hold strings.
//          You MUST annotate this one. Explain in a comment why.

// let fleet: string[] = [];

/**reason: without an initial value or annotation,
TypeScript would infer never[], which is useless.

*/

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

//solution
// type Heading = 'north' | 'south' | 'east' | 'west'
// let direction = 'north' as Heading;

// function setHeading(h: Heading): void{
//   console.log(h)
// }

// setHeading(direction)

// Task 2b: Declare a config object:
//          const config = { theme: 'dark', language: 'en' }
//          Hover over `theme` — what type does TypeScript infer? (string or 'dark'?)
//          Now redeclare it with `as const` and hover again. What changes?

//solution
// const config = { theme: 'dark', language: 'en' };  //infers string

// const config = {theme: 'dark', language:'en'} as const  //infers dark, the as const makes dark a literal type

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

interface Printable {
   name: string; 
   email: string 
  }

  function printContact(p: Printable): void{
    console.log(`${p.name} | ${p.email}`)
  }

  const employee: Printable = {
    name: 'Steve',
    email: 'muiga@gmail.com',
    department: 'HR',
    salary: 500

  }   // when written like this I get error: Object literal may only specify known properties, and 'department' does not exist in type 'Printable'.

 const employee = {
    name: 'Steve',
    email: 'muiga@gmail.com',
    department: 'HR',
    salary: 500

  }  //prints. shape matters so as long as name and email are passed
  printContact(employee)

  //
  
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

/**const bookings: {
    id: number;
    customer: string;
    amount: number;
    status: string;
}[] */

// Task 4b: Use .filter() to get confirmed bookings. Store in `confirmed`.
//          Hover over `confirmed` — what type does TypeScript infer?

const confirmed = bookings.filter(b => b.status === 'confirmed');
// inferred: { id: number; customer: string; amount: number; status: string; }[]
// same type as bookings — filter never changes the shape, just reduces the items

// Task 4c: Use .map() to get an array of amounts from confirmed bookings.
//          Hover over the result — what type does TypeScript infer?
const amounts = confirmed.map(b => b.amount)

// Task 4d: Use .reduce() to calculate total revenue from confirmed bookings.
//          Log the result.
const total = confirmed.reduce((acc, b) => acc + b.amount, 0)