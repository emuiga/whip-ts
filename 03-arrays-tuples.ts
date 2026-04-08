/**
 * Exercise 03 — Arrays & Tuples
 *
 * Reference: notes-arrays-tuples.ts
 * Run with: npx ts-node 03-arrays-tuples.ts
 */


// ============================================================
// EXERCISE 1 — Typed arrays
// ============================================================

// Task 1a: Declare a typed array `customerNames` of strings
//          containing at least 3 names.

const customerNames: string[] = ['Alice', 'Njer', 'Killi']

// Task 1b: Define an interface `Booking` with:
//          - id: number
//          - customer: string
//          - amount: number
//          - status: string
//          Then declare a typed array `bookings` of type Booking[]
//          with at least 3 booking objects.

interface Booking {
  id: number;
  customer: string;
  amount: number;
  status: string;
}

const bookings: Booking[] = [
  {id: 1, customer: 'Njeo', amount: 11000, status: 'confirmed'},
  {id: 2, customer: 'Nanami', amount: 1000, status: 'rejected'},
  {id: 3, customer: 'Miwa', amount: 12000, status: 'confirmed'},
]
// Task 1c: Use .map() on bookings to return a string[] of customer names.
//          Store in `names` — TypeScript should infer the type.
//          Log it.

const names: string[] = bookings.map(b=> b.customer);
console.log(names);

// Task 1d: Use .filter() on bookings to get only bookings where amount > 10000.
//          Store in `highValue` — TypeScript should infer Booking[].
//          Log it.

const highValue: Booking[] = bookings.filter(b => b.amount > 10000);
console.log(highValue)
// ============================================================
// EXERCISE 2 — Tuples
// ============================================================

// Task 2a: Declare a tuple `dimensions` of type [number, number]
//          representing width and height. Give it any values.

const dimensions: [number, number] = [12, 21]

// Task 2b: Declare a tuple `record` of type [number, string, number]
//          representing: id, customerName, totalAmount.
//          e.g. [1, 'Alice', 15000]

const record: [id: number, customerName: string, totalAmount: number] = [1, 'Alice', 15000]
// Task 2c: Destructure `record` into three variables: id, customerName, totalAmount.
//          Log all three.
//          Hint: same destructuring syntax as arrays — it's positional.

const record: [id: number, customerName: string, totalAmount: number] = [1, 'Alice', 15000]


// ============================================================
// EXERCISE 3 — Named tuple type
// ============================================================

// Task 3a: Define a type alias `BookingSummary` as a named tuple:
//          [id: number, customer: string, status: string, amount: number]

// Task 3b: Create an array of BookingSummary called `summaries`
//          with at least 2 entries.

// Task 3c: Use .map() on summaries to log each one as a string like:
//          '#1 — Alice — confirmed — KES 12,000'
//          Hint: each item is a tuple, so item[0] is id, item[1] is customer, etc.
//          Use toLocaleString() on the amount.


// ============================================================
// EXERCISE 4 — Putting it together
// ============================================================

// Task 4: You have a fleet and a list of booking amounts per vehicle.
//         Use the data below — do not modify it.

interface Vehicle {
  id: number;
  make: string;
  model: string;
  available: boolean;
}

const fleet: Vehicle[] = [
  { id: 1, make: 'Toyota',  model: 'Corolla',  available: true  },
  { id: 2, make: 'Nissan',  model: 'X-Trail',  available: false },
  { id: 3, make: 'Subaru',  model: 'Outback',  available: true  },
  { id: 4, make: 'Mazda',   model: 'CX-5',     available: false },
];

// Task 4a: Filter fleet to get only available vehicles.
//          Store in `availableFleet` — type should be Vehicle[].

// Task 4b: Map availableFleet to a string[] of descriptions like 'Toyota Corolla'.
//          Store in `availableNames`.

// Task 4c: Log the count of available vehicles and their names.
//          e.g. '2 vehicles available: Toyota Corolla, Subaru Outback'
//          Hint: availableNames.join(', ')
