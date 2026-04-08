/**
 * Exercise 07 — Generics
 *
 * Reference: notes-07-generics.ts
 * Run with: npx ts-node 07-generics.ts
 */


// ============================================================
// EXERCISE 1 — Generic functions
// ============================================================

// Task 1a: Write a generic function `first<T>` that accepts an array of T
//          and returns the first element.
//          Call it with: a number array, a string array, and an object array.
//          Confirm TypeScript infers the correct return type each time.

// Task 1b: Write a generic function `last<T>` that returns the last element
//          of an array. Call it with at least two different types.

// Task 1c: Write a generic function `toArray<T>` that accepts a single value
//          of type T and wraps it in an array: T → T[]
//          e.g. toArray(42) → [42], toArray('hi') → ['hi']


// ============================================================
// EXERCISE 2 — Generic interfaces
// ============================================================

// Task 2a: Define a generic interface `ApiResponse<T>` with:
//          - data: T
//          - status: number
//          - message: string

// Task 2b: Define these two interfaces:
//          interface User    { id: number; name: string }
//          interface Vehicle { id: number; make: string }
//
//          Create two typed ApiResponse objects:
//          - one of type ApiResponse<User>
//          - one of type ApiResponse<Vehicle[]>   ← note: array of vehicles
//
//          Log both.


// ============================================================
// EXERCISE 3 — Generic constraints
// ============================================================

// Task 3a: Write a generic function `getId<T extends { id: number }>`
//          that accepts any object with an id field and returns the id.
//          Call it with a User, a Vehicle, and a Booking object.

// Task 3b: Write a generic function `getField<T, K extends keyof T>`
//          that accepts an object of type T and a key K,
//          and returns the value at that key.
//          e.g. getField(user, 'name') → 'Alice'
//               getField(user, 'id')   → 1
//          Try passing an invalid key — confirm TypeScript errors.


// ============================================================
// EXERCISE 4 — Putting it together
// ============================================================

// Task 4: Write a generic function `filterBy<T>` that accepts:
//         - items: T[]
//         - key: keyof T
//         - value: T[keyof T]
//         and returns all items where items[key] === value.
//
//         Use it with the data below:

interface Booking {
  id: number;
  customer: string;
  status: string;
  amount: number;
}

const bookings: Booking[] = [
  { id: 1, customer: 'Alice',   status: 'confirmed', amount: 12000 },
  { id: 2, customer: 'Brian',   status: 'pending',   amount: 4500  },
  { id: 3, customer: 'Cynthia', status: 'confirmed', amount: 18000 },
  { id: 4, customer: 'David',   status: 'cancelled', amount: 8000  },
];

// Call filterBy to get:
// - all confirmed bookings
// - all bookings by 'Alice'
// Log both results.
