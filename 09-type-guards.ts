/**
 * Exercise 09 — Type Guards & Narrowing
 *
 * Reference: notes-09-type-guards.ts
 * Run with: npx ts-node 09-type-guards.ts
 */


// ============================================================
// EXERCISE 1 — typeof narrowing
// ============================================================

// Task 1a: Write a function `formatValue(value: string | number): string`
//          - If string: return it trimmed and uppercased
//          - If number: return it formatted as 'KES X,XXX' using toLocaleString()
//          Call it with a string and a number.

// Task 1b: Write a function `double(value: string | number): string | number`
//          - If string: return it repeated twice (e.g. 'ha' → 'haha')
//          - If number: return it multiplied by 2
//          Call it with both types and log the results.


// ============================================================
// EXERCISE 2 — Truthiness narrowing
// ============================================================

// Task 2a: Write a function `getDisplayName(name: string | null | undefined): string`
//          Returns the name if it exists, otherwise returns 'Anonymous'.

// Task 2b: Write a function `processBooking(booking: Booking | undefined): void`
//          If booking exists, log: 'Processing: [customer] — KES [amount]'
//          If not, log: 'No booking provided'
//
//          Use this interface:
//          interface Booking { id: number; customer: string; amount: number }


// ============================================================
// EXERCISE 3 — Discriminated union
// ============================================================

// Task 3: Define these types and write a handler function.
//
//   type IdleState    = { status: 'idle' }
//   type LoadingState = { status: 'loading' }
//   type SuccessState = { status: 'success'; vehicles: string[] }
//   type ErrorState   = { status: 'error'; message: string }
//   type PageState    = IdleState | LoadingState | SuccessState | ErrorState
//
// Write a function `renderPage(state: PageState): string` that returns:
//   - idle:    'Ready.'
//   - loading: 'Fetching vehicles...'
//   - success: 'Found X vehicles: Toyota, Nissan...' (use vehicles.length and join)
//   - error:   'Something went wrong: [message]'
//
// Call it four times — once for each state — and log the results.


// ============================================================
// EXERCISE 4 — Type predicate
// ============================================================

// Task 4a: Define this interface:
//          interface Vehicle { id: number; make: string; model: string }
//
//          Write a type predicate function `isVehicle(value: unknown): value is Vehicle`
//          that checks:
//          - value is an object (not null)
//          - has a 'make' property
//          - has a 'model' property

// Task 4b: Use it on the array below to filter out non-Vehicle items safely.
//          Log only the valid Vehicle entries.

const rawData: unknown[] = [
  { id: 1, make: 'Toyota', model: 'Corolla' },
  { id: 2, name: 'Alice' },
  'just a string',
  { id: 3, make: 'Nissan', model: 'X-Trail' },
  42,
  null,
];

// Hint: rawData.filter(isVehicle) — TypeScript will infer Vehicle[] if your predicate is correct.
