/**
 * NOTES: Advanced Patterns (Light Touch)
 * Topic 15 — mapped types, conditional types, template literals
 *
 * NOTE: These are things you'll ENCOUNTER and READ, not necessarily write from scratch.
 * Understand the concepts enough to recognise and use them.
 * You'll revisit these as you encounter them in real code.
 */


// ============================================================
// 1. MAPPED TYPES — transform every field in a type
// ============================================================

// A mapped type loops over the keys of a type and applies a transformation.
// Syntax: { [K in keyof T]: transformation }

interface Vehicle {
  id: number;
  make: string;
  available: boolean;
}

// Make every field optional (this is literally how Partial<T> is implemented):
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type OptionalVehicle = MyPartial<Vehicle>;
// same as: { id?: number; make?: string; available?: boolean }

// Make every field readonly (this is how Readonly<T> is implemented):
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// When you see Partial<T>, Required<T>, Readonly<T> in TypeScript — these are mapped types.
// You won't write many from scratch, but knowing the pattern helps you read them.


// ============================================================
// 2. CONDITIONAL TYPES — types that depend on a condition
// ============================================================

// Syntax: T extends U ? TrueType : FalseType
// "If T is assignable to U, use TrueType, otherwise use FalseType"

type IsString<T> = T extends string ? 'yes' : 'no';

type A = IsString<string>;  // 'yes'
type B = IsString<number>;  // 'no'

// More practical — NonNullable (built into TypeScript):
type NonNullable<T> = T extends null | undefined ? never : T;

type C = NonNullable<string | null>;  // string
type D = NonNullable<number | undefined>; // number

// You'll see conditional types in library definitions.
// Understanding the ternary-like syntax is enough at this stage.


// ============================================================
// 3. TEMPLATE LITERAL TYPES — string types from patterns
// ============================================================

// TypeScript can build string types from other string types,
// using the same template literal syntax as JavaScript.

type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// HandlerName = 'onClick' | 'onFocus' | 'onBlur'

type CSSProperty = 'margin' | 'padding';
type CSSDirection = 'top' | 'right' | 'bottom' | 'left';
type CSSKey = `${CSSProperty}-${CSSDirection}`;
// 'margin-top' | 'margin-right' | ... | 'padding-left'

// You'll encounter this in:
// - React event handler types (onClick, onChange, onSubmit...)
// - CSS-in-JS libraries
// - Auto-generated API types

// You don't need to write these from scratch often.
// Recognise the pattern when you see it.


// ============================================================
// 4. KEYOF — get the keys of a type as a union
// ============================================================

// keyof T → produces a union of all keys in T as literal types

interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User;  // 'id' | 'name' | 'email'

// Practical use — generic function that reads any field from an object:
function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'Alice', email: 'alice@example.com' };

getField(user, 'name');   // returns string
getField(user, 'id');     // returns number
// getField(user, 'age'); ← ❌ error — 'age' is not a key of User

// This pattern shows up in form libraries and utility functions.


// ============================================================
// 5. PUTTING IT TOGETHER — what you'll see in real React/Next.js code
// ============================================================

// You'll encounter patterns like this in component libraries or hooks:

// Generic component props:
interface TableProps<T> {
  data: T[];
  columns: Array<keyof T>;
  onSelect: (item: T) => void;
}

// Conditional props — either onSuccess OR onError, not both as optional:
type ButtonProps =
  | { variant: 'primary'; onClick: () => void }
  | { variant: 'danger';  onConfirm: () => void; confirmText: string };

// Status-driven state (discriminated union):
type PageState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: Do I need to memorise all of this?
// A: No. Know that mapped types, conditional types, and template literal types exist.
//    Understand the patterns well enough to READ them.
//    You'll write the simpler ones (keyof, basic mapped types) regularly.
//    The complex ones you'll look up when needed.

// Q: Which of these is most important to know first?
// A: In order of importance for React/Next.js:
//    1. keyof — you'll use this in generic components
//    2. Discriminated unions / conditional types — state modelling
//    3. Template literal types — mostly read, rarely write
//    4. Mapped types — understand how Partial/Readonly work

// Q: Where can I see all TypeScript utility types?
// A: https://www.typescriptlang.org/docs/handbook/utility-types.html
