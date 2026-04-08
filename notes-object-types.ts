/**
 * NOTES: Object Types
 * Topic 7 — describing the shape of objects with interfaces and type aliases
 */


// ============================================================
// 1. INTERFACE
// ============================================================

// An interface describes the shape of an object.
// It tells TypeScript: "any object of this type must have these fields."

interface User {
  id: number;
  name: string;
  email: string;
}

// Using it:
const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

// TypeScript will error if you:
// - miss a required field
// - add a field that isn't in the interface
// - put the wrong type in a field


// ============================================================
// 2. TYPE ALIAS
// ============================================================

// type alias with an object looks almost identical to interface:
type Vehicle = {
  id: number;
  make: string;
  model: string;
  pricePerDay: number;
};

const car: Vehicle = {
  id: 101,
  make: 'Toyota',
  model: 'Corolla',
  pricePerDay: 4500,
};

// Rule of thumb:
// - Use `interface` for object shapes (especially when building React components)
// - Use `type` for everything else: unions, primitives, combinations


// ============================================================
// 3. OPTIONAL PROPERTIES (?)
// ============================================================

// Add ? after the field name to make it optional.
// TypeScript won't complain if it's missing.

interface Customer {
  id: number;
  name: string;
  phone?: string;   // may or may not exist
  notes?: string;   // may or may not exist
}

const customer1: Customer = { id: 1, name: 'Brian' };             // fine — phone and notes omitted
const customer2: Customer = { id: 2, name: 'Eve', phone: '0712' }; // also fine


// ============================================================
// 4. READONLY PROPERTIES
// ============================================================

// readonly means the field can be set once but never changed.

interface Booking {
  readonly id: number;   // set on creation, never changed
  customerId: number;
  days: number;
  amount: number;
}

const booking: Booking = { id: 1, customerId: 2, days: 3, amount: 12000 };
// booking.id = 99;  ← ❌ error — cannot assign to 'id' because it is a read-only property


// ============================================================
// 5. TYPED FUNCTION PARAMETERS
// ============================================================

// Functions can accept and return typed objects.

function formatBooking(booking: Booking): string {
  return `Booking #${booking.id} — ${booking.days} days — KES ${booking.amount}`;
}

// You can also define return types as interfaces:
function createUser(name: string, email: string): User {
  return { id: Date.now(), name, email };
}


// ============================================================
// 6. NESTED INTERFACES
// ============================================================

interface Address {
  city: string;
  country: string;
}

interface Company {
  id: number;
  name: string;
  address: Address;   // nested — another interface as a type
}

const company: Company = {
  id: 1,
  name: 'Acme Rentals',
  address: {
    city : 'Nairobi',
    country: 'Kenya',
  },
};

// Accessing nested:
// company.address.city → 'Nairobi'


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: interface vs type — which should I use?
// A: For objects: either works, but interface is conventional in React/TS codebases.
//    For unions (string | number), functions, or combining types: use type.
//    When in doubt: interface for objects, type for everything else.

// Q: What happens if I add an extra field not in the interface?
// A: TypeScript errors: "Object literal may only specify known properties".
//    This protects you from typos in field names.

// Q: Can I use an interface as a type for a function parameter?
// A: Yes — that's one of the main uses. Any object that matches the shape works.
//    This is called "structural typing" — TS checks shape, not name.
