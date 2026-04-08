/**
 * NOTES: Arrays & Tuples
 * Topic 8 — typed arrays and fixed-length tuples
 */


// ============================================================
// 1. TYPED ARRAYS
// ============================================================

// Two syntaxes — both mean exactly the same thing:
const names: string[]       = ['Alice', 'Brian', 'Eve'];
const scores: Array<number> = [85, 92, 78];

// Use string[] — it's shorter and more common.
// Array<number> becomes useful later with generics.

// Arrays of objects — combine with interfaces:
interface Vehicle {
  id: number;
  make: string;
  model: string;
}

const fleet: Vehicle[] = [
  { id: 1, make: 'Toyota', model: 'Corolla' },
  { id: 2, make: 'Nissan', model: 'X-Trail' },
];

// TypeScript now knows every item in fleet is a Vehicle.
// fleet[0].make  → fine
// fleet[0].price → ❌ error — 'price' does not exist on Vehicle


// ============================================================
// 2. ARRAYS + METHODS
// ============================================================

// TypeScript knows the type coming out of array methods too.

const makes: string[] = fleet.map(v => v.make);
// TypeScript infers: string[] — because v.make is a string

const filtered: Vehicle[] = fleet.filter(v => v.id > 1);
// TypeScript infers: Vehicle[] — filter returns same type as input


// ============================================================
// 3. TUPLES
// ============================================================

// A tuple is a fixed-length array where each POSITION has a specific type.
// Unlike a regular array where every item is the same type,
// a tuple can have different types at different positions.

// Regular array — all items same type, any length:
const ids: number[] = [1, 2, 3, 4];

// Tuple — fixed positions, fixed types:
const point: [number, number] = [10, 20];       // x, y coordinates
const entry: [string, number] = ['Alice', 85];  // name, score

// Position matters:
// entry[0] → string
// entry[1] → number
// entry[2] → ❌ error — tuple only has 2 positions

// Wrong order also errors:
// const bad: [string, number] = [42, 'Alice']; ← ❌ types don't match positions


// ============================================================
// 4. WHERE YOU'LL SEE TUPLES IN THE WILD
// ============================================================

// 1. React's useState — returns a tuple:
//    const [count, setCount] = useState<number>(0);
//    position 0 → the value (number)
//    position 1 → the setter function
//    That's why you destructure it immediately — it's positional.

// 2. Coordinates:
const coords: [number, number] = [1.2921, 36.8219]; // lat, lng

// 3. CSV rows or structured data:
const row: [number, string, number] = [1, 'Alice', 12000]; // id, name, amount


// ============================================================
// 5. NAMED TUPLES (cleaner, self-documenting)
// ============================================================

// You can label tuple positions — doesn't change behaviour,
// just makes the code easier to read:
type Coordinate = [lat: number, lng: number];
type BookingRow = [id: number, customer: string, amount: number];

const location: Coordinate = [1.2921, 36.8219];
const record: BookingRow   = [1, 'Alice', 12000];


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: When do I use a tuple vs an object?
// A: Object when you have named fields and the data will be passed around.
//    Tuple when the structure is small, fixed, and positional — like coordinates
//    or the [value, setter] pair from useState.
//    If you need labels, use an object. If positions are obvious, use a tuple.

// Q: What's the difference between string[] and [string]?
// A: string[]  → array of strings, any length
//    [string]  → tuple with exactly ONE string at position 0

// Q: Can a tuple have optional positions?
// A: Yes, with ?: [number, number, number?] → third item is optional
