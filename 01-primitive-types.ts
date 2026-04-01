/**
 * Exercise 01 — Primitive Types
 *
 * Reference: notes-primitive-types.ts
 * Run with: npx ts-node 01-primitive-types.ts
 */


// ============================================================
// EXERCISE 1 — Type annotations
// ============================================================

// Task 1a: Declare three variables with explicit type annotations:
//          - a string called `productName` with value 'Laptop'
//          - a number called `price` with value 85000
//          - a boolean called `inStock` with value true
let productName: string = 'Laptop';
let price: number = 85000;
let inStock: boolean = true;

// Task 1b: Declare a variable `discount` of type number but don't assign
//          a value yet. Then assign it 10 on the next line.

let discount: number;
discount = 10;
// Log all four variables.

console.log(productName);
console.log(price);
console.log(inStock);
console.log(discount);

// ============================================================
// EXERCISE 2 — Type inference
// ============================================================

// Task 2a: Declare these variables WITHOUT type annotations and let
//          TypeScript infer the types:
//          - `brand` = 'Toyota'
//          - `year` = 2022
//          - `isAvailable` = false

let brand = 'Toyota';
let year = 2022;
let isAvailable = false;

// Task 2b: Try reassigning `brand` to a number (e.g. 42).
//          You should see a red underline. Read the error, then undo it.
// brand = 42
// error: Type 'number' is not assignable to type 'string'.ts(2322)
//        let brand: string
//          (Don't leave the broken line in the file)

// ============================================================
// EXERCISE 3 — Function annotations
// ============================================================

// Task 3a: Write a function `formatPrice` that takes a `price` (number)
//          and a `currency` (string) and returns a string.
//          e.g. formatPrice(85000, 'KES') → 'KES 85,000'
//          Hint: price.toLocaleString() formats numbers with commas.

function formatPrice(price: number, currency: string): string {
    return `${currency} ${price.toLocaleString()}`;
}

console.log(formatPrice(8500, 'KES'))

// Task 3b: Write a function `logBooking` that takes a `customerName` (string)
//          and `days` (number), logs a message, and returns nothing (void).
//          e.g. logBooking('Alice', 3) → logs 'Alice booked for 3 days'

function logBooking(customerName: string, days: number): void {
    console.log(customerName + ' booked for '+ days +' days');
}
// Call both functions and log / observe the output.


// ============================================================
// EXERCISE 4 — Putting it together
// ============================================================

// Task 4: Write a function `calculateTotal` that takes:
//         - `pricePerDay` (number)
//         - `days` (number)
//         - `includesTax` (boolean)
//         Returns the total as a number.
//         If includesTax is true, apply 16% tax (multiply by 1.16).
//         If false, return the plain total.

function calculateTotal(pricePerDay: number, days: number, includesTax: boolean) : number {
    if (includesTax){
        return pricePerDay * days * 1.16
    } else {
        return pricePerDay * days
    }
}

// Call it twice — once with tax, once without — and log both results.

console.log(calculateTotal(5000, 30, true))
console.log(calculateTotal(5000, 30, false))

