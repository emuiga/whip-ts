/**
 * NOTES: Union Types & Literal Types
 * Topic 9 — describing values that can be one of several types or one of several specific values
 */


// ============================================================
// 1. UNION TYPES
// ============================================================

// A union type says: "this value can be THIS type OR THAT type"
// Use the | (pipe) character between types.

let id: string | number;
id = 1;        // fine
id = 'abc-1';  // also fine
id = true;     // ❌ error — boolean is not in the union

// Common use: a value that could come back as a number or null
let age: number | null = null;  // not set yet
age = 30;                       // set later

// Function that accepts multiple types:
function printId(id: string | number): void {
  console.log('ID:', id);
}


// ============================================================
// 2. LITERAL TYPES
// ============================================================

// A literal type locks a variable to a specific VALUE, not just a type.
// Instead of saying "any string", you say "only THIS string".

type Direction = 'north' | 'south' | 'east' | 'west';

let heading: Direction = 'north'; // fine
// heading = 'up';  ← ❌ error — 'up' is not assignable to type Direction

// Literal types work with numbers too:
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 4; // fine
// roll = 7;  ← ❌ error


// ============================================================
// 3. WHERE YOU'LL USE THIS CONSTANTLY IN REACT
// ============================================================

// Status fields — instead of an open string, lock it to valid values:
type BookingStatus = 'pending' | 'confirmed' | 'cancelled';
type LoadingState  = 'idle' | 'loading' | 'success' | 'error';

interface Booking {
  id: number;
  customer: string;
  status: BookingStatus;  // only the three values are valid
}

// In React state:
// const [status, setStatus] = useState<LoadingState>('idle');
// setStatus('loading')  → fine
// setStatus('oops')     → ❌ TypeScript catches it immediately


// ============================================================
// 4. NARROWING — working safely with unions
// ============================================================

// When a value can be multiple types, TypeScript needs you to
// narrow it down before doing type-specific operations.

function formatId(id: string | number): string {
  if (typeof id === 'string') {
    return id.toUpperCase();  // TypeScript knows id is string here
  } else {
    return id.toFixed(0);     // TypeScript knows id is number here
  }
}

// typeof is the standard narrowing tool for primitive unions.
// You'll also use: if (value === null), if (Array.isArray(value)), etc.


// ============================================================
// 5. DISCRIMINATED UNIONS (PREVIEW)
// ============================================================

// When you have objects that share a common field (the "discriminant"),
// TypeScript can narrow the full object type based on that field.

type SuccessResponse = {
  status: 'success';
  data: string[];
};

type ErrorResponse = {
  status: 'error';
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): void {
  if (response.status === 'success') {
    console.log(response.data);    // TypeScript knows this is SuccessResponse
  } else {
    console.log(response.message); // TypeScript knows this is ErrorResponse
  }
}

// The `status` field is the discriminant — it tells TypeScript which branch you're in.
// This pattern is everywhere in real React/Next.js code.


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: When do I use a union type vs an interface?
// A: Union for values that can be different types (string | number)
//    or specific options ('pending' | 'confirmed').
//    Interface for describing the shape of an object.
//    They work together — interfaces can have union fields.

// Q: Is BookingStatus = 'pending' | 'confirmed' | 'cancelled' a union or a literal type?
// A: Both. It's a union OF literal types.
//    Each individual value ('pending') is a literal type.
//    The combination (|) is a union.

// Q: What if I want a field that can be a string OR undefined?
// A: Two ways — they behave slightly differently:
//    name?: string          → optional property (may not exist on object)
//    name: string | undefined → property exists but value can be undefined
//    In practice, ? is more common for object properties.
