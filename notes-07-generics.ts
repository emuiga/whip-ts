/**
 * NOTES: Generics
 * Topic 12 — writing reusable code that works with any type, safely
 */


// ============================================================
// 1. THE PROBLEM GENERICS SOLVE
// ============================================================

// Without generics, if you want a function that works on multiple types,
// you have two bad options:

// Option A — repeat yourself:
function firstNumber(arr: number[]): number { return arr[0]; }
function firstString(arr: string[]): string { return arr[0]; }

// Option B — use any (unsafe, loses all type info):
function firstAny(arr: any[]): any { return arr[0]; }

// Generics give you Option C — one function, any type, fully type-safe.


// ============================================================
// 2. GENERIC FUNCTIONS — the <T> syntax
// ============================================================

// <T> is a TYPE PARAMETER — a placeholder for whatever type is passed in.
// T is convention, but it can be any name (T, U, Item, Value, etc.)

function first<T>(arr: T[]): T {
  return arr[0];
}

// TypeScript infers T from what you pass in:
const num  = first([1, 2, 3]);          // T is number   → returns number
const str  = first(['a', 'b', 'c']);    // T is string   → returns string
const item = first([{ id: 1 }, { id: 2 }]); // T is { id: number } → returns that

// Or you can be explicit:
const n = first<number>([1, 2, 3]);


// ============================================================
// 3. MULTIPLE TYPE PARAMETERS
// ============================================================

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair('Alice', 30);  // [string, number]
const coords = pair(1.29, 36.82);  // [number, number]


// ============================================================
// 4. GENERIC INTERFACES
// ============================================================

// Describe a structure that works with any type:

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Use it with specific types:
interface User { id: number; name: string; }
interface Vehicle { id: number; make: string; }

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'Alice' },
  status: 200,
  message: 'ok',
};

const vehicleResponse: ApiResponse<Vehicle[]> = {
  data: [{ id: 1, make: 'Toyota' }],
  status: 200,
  message: 'ok',
};

// This is exactly the pattern you'll use for API responses in Next.js.


// ============================================================
// 5. GENERIC CONSTRAINTS — extends
// ============================================================

// Sometimes you want T to be any type BUT it must have certain fields.
// Use `extends` to add a constraint.

function getId<T extends { id: number }>(item: T): number {
  return item.id;
}

getId({ id: 1, name: 'Alice' });  // fine — has id
getId({ id: 5, make: 'Toyota' }); // fine — has id
// getId({ name: 'Bob' });  ← ❌ error — missing id property


// ============================================================
// 6. REACT + GENERICS — useState
// ============================================================

// useState is a generic function. Here's its type signature:
// function useState<S>(initialState: S): [S, Dispatch<SetStateAction<S>>]

// When you write:
// const [user, setUser] = useState<User | null>(null);
// T = User | null
// user is typed as User | null
// setUser only accepts User | null

// When you write:
// const [status, setStatus] = useState<LoadingState>('idle');
// T = LoadingState
// setStatus only accepts valid LoadingState values

// Generics are what make hooks type-safe without you doing anything extra.


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: When do I write my own generic functions?
// A: Mostly for utility functions that work on arrays, objects, or API responses.
//    In React code, you'll mostly CONSUME generics (useState<T>, etc.)
//    rather than write your own.

// Q: Why is it <T> and not just using any?
// A: `any` loses the type permanently. With <T>, TypeScript tracks the type
//    all the way through. If you put a number[] in, you get a number out.
//    With any, you put anything in and get anything out — no safety.

// Q: What does Array<string> mean now that I know generics?
// A: Array is a generic interface: interface Array<T> { ... }
//    Array<string> is Array with T = string.
//    string[] is just shorthand for Array<string>.
