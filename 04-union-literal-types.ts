/**
 * Exercise 04 — Union Types & Literal Types
 *
 * Reference: notes-04-union-literal-types.ts
 * Run with: npx ts-node 04-union-literal-types.ts
 */


// ============================================================
// EXERCISE 1 — Union types
// ============================================================

// Task 1a: Write a function `formatId` that accepts an `id` of type
//          string | number and returns a string.
//          If id is a string, return it uppercased.
//          If id is a number, return it prefixed with '#'.
//          e.g. formatId('abc') → 'ABC', formatId(42) → '#42'
//          Hint: use typeof to narrow.

// Task 1b: Declare a variable `input` typed as string | number | null.
//          Assign it three different values in sequence and log each.
//          (Reassign the same variable — let, not const.)


// ============================================================
// EXERCISE 2 — Literal types
// ============================================================

// Task 2a: Define a type alias `VehicleStatus` with these values only:
//          'available' | 'rented' | 'maintenance'

// Task 2b: Define a type alias `BookingStatus` with:
//          'pending' | 'confirmed' | 'cancelled'

// Task 2c: Define an interface `Booking` with:
//          - id: number
//          - customer: string
//          - vehicleStatus: VehicleStatus
//          - bookingStatus: BookingStatus

// Task 2d: Create two Booking objects — one with valid values,
//          then try assigning an invalid status (e.g. 'approved') and
//          read the TypeScript error. Remove the broken line.


// ============================================================
// EXERCISE 3 — Narrowing
// ============================================================

// Task 3a: Write a function `describe` that accepts a value of type
//          string | number | boolean and returns a string describing it.
//          e.g. describe('hello') → 'String: hello'
//               describe(42)      → 'Number: 42'
//               describe(true)    → 'Boolean: true'
//          Use typeof narrowing for all three cases.

// Task 3b: Write a function `getCustomerName` that accepts
//          name: string | null | undefined
//          and returns the name if present, or 'Guest' as a fallback.


// ============================================================
// EXERCISE 4 — Discriminated union
// ============================================================

// Task 4: Define these three types:
//
//   type SuccessResult = { status: 'success'; data: string[] }
//   type ErrorResult   = { status: 'error';   message: string }
//   type LoadingResult = { status: 'loading' }
//   type Result = SuccessResult | ErrorResult | LoadingResult
//
// Write a function `handleResult` that accepts a Result and logs:
//   - If success: 'Data: ' + data.join(', ')
//   - If error:   'Error: ' + message
//   - If loading: 'Loading...'
//
// Call it three times with each variant and confirm the output.
