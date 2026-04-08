/**
 * Exercise 10 — Advanced Patterns (Light Touch)
 *
 * Reference: notes-10-advanced-patterns.ts
 * Run with: npx ts-node 10-advanced-patterns.ts
 *
 * NOTE: These exercises are READ + UNDERSTAND + APPLY, not memorise.
 * Focus on recognising the patterns and being able to use them.
 * You don't need to write these from scratch in real work.
 */


// ============================================================
// EXERCISE 1 — keyof
// ============================================================

interface Vehicle {
  id: number;
  make: string;
  model: string;
  pricePerDay: number;
  available: boolean;
}

// Task 1a: Write a generic function `getField<T, K extends keyof T>`
//          that takes an object and a key and returns the value.
//          Call it with a Vehicle object — try: 'make', 'pricePerDay', 'available'.
//          Try passing a key that doesn't exist — confirm TypeScript errors.

// Task 1b: Write a function `pickFields<T>(obj: T, keys: Array<keyof T>): Partial<T>`
//          that returns a new object with only the specified keys.
//          e.g. pickFields(vehicle, ['make', 'model']) → { make: 'Toyota', model: 'Corolla' }
//
//          Hint: use reduce or forEach to build the result object.

const vehicle: Vehicle = {
  id: 1,
  make: 'Toyota',
  model: 'Corolla',
  pricePerDay: 4500,
  available: true
};


// ============================================================
// EXERCISE 2 — as const
// ============================================================

// Task 2a: Define this array WITHOUT as const:
//          const statuses = ['pending', 'confirmed', 'cancelled']
//          Hover over it — what does TypeScript infer? (string[] or literal types?)
//
//          Now add `as const`. What changes?
//          Write both inferred types as comments.

// Task 2b: Define a config object with as const:
//          const APP_CONFIG = { theme: 'dark', locale: 'en', maxRetries: 3 } as const
//          Try reassigning APP_CONFIG.theme = 'light' — read the error.
//          Write the error as a comment.


// ============================================================
// EXERCISE 3 — Mapped type (reading + applying)
// ============================================================

// Task 3: Below is a simplified mapped type. Read it, then answer the questions.

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Q1: What does this type do to every field in T? (write answer as comment)
// Q2: What would Nullable<Vehicle> look like? Write out the resulting type as a comment.

// Task 3b: Create an object of type Nullable<Vehicle> where some fields are null.
//          Confirm TypeScript accepts nulls and still errors on wrong types.


// ============================================================
// EXERCISE 4 — Discriminated union (advanced usage)
// ============================================================

// Task 4: Model a UI state for a vehicle booking page.
//         The page has 4 possible states — define them as a discriminated union:
//
//   - idle: nothing happening
//   - submitting: form is being submitted (include: vehicleId: number, days: number)
//   - success: booking confirmed (include: bookingId: number, confirmationCode: string)
//   - error: something failed (include: message: string, retryable: boolean)
//
//  Write a function `getPageMessage(state: PageState): string` that returns
//  an appropriate message for each state.
//
//  Create one object for each state and call getPageMessage on each.
