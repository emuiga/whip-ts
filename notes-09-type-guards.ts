/**
 * NOTES: Type Guards & Narrowing
 * Topic 14 — telling TypeScript which specific type you're working with
 */

// When a value has a union type, TypeScript doesn't know which branch you're in.
// Narrowing is the process of proving to TypeScript which specific type it is.


// ============================================================
// 1. typeof — narrow primitive types
// ============================================================

function format(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase();   // TypeScript knows: string
  }
  return value.toFixed(2);        // TypeScript knows: number
}

// typeof works for: string, number, boolean, undefined, bigint, symbol, function
// Does NOT work well for objects (typeof null === 'object' — JS quirk)


// ============================================================
// 2. TRUTHINESS NARROWING — null and undefined checks
// ============================================================

function greet(name: string | null): string {
  if (name) {
    return 'Hello, ' + name; // TypeScript knows name is string here
  }
  return 'Hello, stranger';
}

// Also works with !== null and !== undefined:
function processUser(user: User | undefined): void {
  if (user !== undefined) {
    console.log(user.name); // TypeScript knows user is User here
  }
}

interface User { id: number; name: string; }

// Common in React — checking if data has loaded:
// if (user) { render user card } else { render loading }


// ============================================================
// 3. in OPERATOR — check if a property exists on an object
// ============================================================

interface Car     { make: string; model: string; }
interface Bike    { brand: string; gears: number; }

type Vehicle = Car | Bike;

function describeVehicle(v: Vehicle): string {
  if ('make' in v) {
    return `${v.make} ${v.model}`; // TypeScript knows v is Car
  }
  return `${v.brand} — ${v.gears} gears`; // TypeScript knows v is Bike
}


// ============================================================
// 4. DISCRIMINATED UNIONS — narrowing with a shared field
// ============================================================

// Add a `type` (or `kind`) field to each variant — the "discriminant".
// TypeScript can narrow based on that field alone.

type SuccessResponse = { status: 'success'; data: User[]; };
type ErrorResponse   = { status: 'error';   message: string; };
type LoadingResponse = { status: 'loading'; };

type ApiResponse = SuccessResponse | ErrorResponse | LoadingResponse;

function handleResponse(response: ApiResponse): void {
  switch (response.status) {
    case 'success':
      console.log(response.data);    // TypeScript knows: SuccessResponse
      break;
    case 'error':
      console.log(response.message); // TypeScript knows: ErrorResponse
      break;
    case 'loading':
      console.log('Loading...');     // TypeScript knows: LoadingResponse
      break;
  }
}

// This pattern is the RIGHT way to model state in React:
// type State = { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: User[] } | { status: 'error'; message: string }


// ============================================================
// 5. TYPE PREDICATES — custom type guard functions
// ============================================================

// When typeof and in aren't enough, write your own guard.
// Return type: paramName is TypeName

function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value
  );
}

// Usage:
const data: unknown = { id: 1, name: 'Alice' };

if (isUser(data)) {
  console.log(data.name); // TypeScript knows data is User here
}

// `unknown` is the safe version of `any` — you can't use it until you narrow it.
// Common when dealing with raw API responses or JSON.parse() results.


// ============================================================
// 6. instanceof — for class instances
// ============================================================

class ApiError extends Error {
  statusCode: number;
  constructor(message: string, code: number) {
    super(message);
    this.statusCode = code;
  }
}

function handleError(error: unknown): void {
  if (error instanceof ApiError) {
    console.log(`API Error ${error.statusCode}: ${error.message}`);
  } else if (error instanceof Error) {
    console.log('Generic error:', error.message);
  } else {
    console.log('Unknown error');
  }
}

// Common pattern in catch blocks — you'll use this in Next.js API routes.


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: What's the difference between unknown and any?
// A: any → TypeScript stops checking completely. Unsafe.
//    unknown → TypeScript forces you to narrow before using. Safe.
//    Use unknown for values from outside your code (API responses, JSON.parse).
//    Never use any in new code.

// Q: Why use discriminated unions instead of just instanceof?
// A: instanceof only works with classes. Plain objects need the discriminant field.
//    In React/Next.js, most data is plain objects, not class instances.
//    Discriminated unions are the idiomatic TypeScript approach.

// Q: When do I need a type predicate vs a simple if check?
// A: Use a type predicate when:
//    - The check is complex and you want to reuse it
//    - You need to validate an `unknown` value (e.g. API response)
//    - You want the narrowing to work when you pass the guard as a callback
//    Simple if checks work fine for most inline narrowing.
