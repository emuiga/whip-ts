/**
 * NOTES: Utility Types
 * Topic 13 — TypeScript's built-in type transformers, essential for React
 */

// Utility types transform existing types into new ones.
// You don't define them — they're built into TypeScript.
// All take an existing type as an argument using generics.

interface Vehicle {
  id: number;
  make: string;
  model: string;
  pricePerDay: number;
  available: boolean;
}


// ============================================================
// 1. Partial<T> — make all properties optional
// ============================================================

// Every field becomes optional (?).
// Use case: update payloads where you only send changed fields.

type VehicleUpdate = Partial<Vehicle>;
// same as: { id?: number; make?: string; model?: string; ... }

function updateVehicle(id: number, changes: Partial<Vehicle>): void {
  // can pass just { pricePerDay: 5000 } without all other fields
  console.log('Updating', id, changes);
}

updateVehicle(1, { pricePerDay: 5000 });            // fine
updateVehicle(1, { available: false });              // fine
updateVehicle(1, { make: 'Honda', model: 'CRV' });  // fine


// ============================================================
// 2. Required<T> — make all properties required
// ============================================================

// Opposite of Partial. Removes all ? from optional fields.

interface Draft {
  id?: number;
  title?: string;
  content?: string;
}

type PublishedPost = Required<Draft>;
// same as: { id: number; title: string; content: string }
// now all fields are mandatory


// ============================================================
// 3. Pick<T, K> — select specific properties
// ============================================================

// Create a new type with ONLY the fields you list.
// Use case: when a function only needs a subset of a larger type.

type VehicleCard = Pick<Vehicle, 'id' | 'make' | 'model'>;
// same as: { id: number; make: string; model: string }

function renderVehicleCard(vehicle: VehicleCard): string {
  return `${vehicle.make} ${vehicle.model}`;
  // can't access vehicle.pricePerDay — not in VehicleCard
}


// ============================================================
// 4. Omit<T, K> — exclude specific properties
// ============================================================

// Create a new type with specific fields REMOVED.
// Use case: form inputs that don't include server-generated fields.

type NewVehicleForm = Omit<Vehicle, 'id'>;
// same as: { make: string; model: string; pricePerDay: number; available: boolean }
// id is excluded — server assigns it on creation

type PublicVehicle = Omit<Vehicle, 'id' | 'pricePerDay'>;
// removes both id and pricePerDay


// ============================================================
// 5. Record<K, T> — create an object type from keys and value type
// ============================================================

// Record<Keys, ValueType> — all keys map to the same value type.
// Use case: lookup tables, maps, indexed data.

type StatusLabel = Record<string, string>;
const labels: StatusLabel = {
  confirmed: 'Confirmed',
  pending: 'Pending',
  cancelled: 'Cancelled',
};

// With a union of literal types as keys — strongly typed:
type BookingStatus = 'pending' | 'confirmed' | 'cancelled';
type StatusColours = Record<BookingStatus, string>;

const colours: StatusColours = {
  pending: 'yellow',
  confirmed: 'green',
  cancelled: 'red',
  // missing any of these → TypeScript error
};


// ============================================================
// 6. ReturnType<T> — extract a function's return type
// ============================================================

// Gets the return type of a function without you having to declare it separately.

function getUser() {
  return { id: 1, name: 'Alice', email: 'alice@example.com' };
}

type UserType = ReturnType<typeof getUser>;
// UserType = { id: number; name: string; email: string }

// Useful when a function's return type is complex and you want
// to reuse it elsewhere without duplicating the definition.


// ============================================================
// COMBINING UTILITY TYPES
// ============================================================

// They compose — you can chain them:
type EditableVehicleFields = Partial<Omit<Vehicle, 'id'>>;
// All fields except id, all optional
// Use case: PATCH endpoint body

type VehicleSummary = Pick<Vehicle, 'make' | 'model' | 'pricePerDay'>;
// Just the display fields


// ============================================================
// Q&A FROM SESSION
// ============================================================

// Q: When do I use Partial vs just making fields optional in the interface?
// A: Interface with ? → the field is ALWAYS optional everywhere that type is used.
//    Partial<T> → creates a ONE-TIME derived type for a specific use case (like updates).
//    Keep your base interface strict, derive Partial when you need it.

// Q: Pick vs Omit — which should I use?
// A: Pick when you want a SMALL number of fields from a large type.
//    Omit when you want MOST fields and just need to remove a few.
//    Pick 2 fields → use Pick. Remove 1 field from 10 → use Omit.

// Q: Where will I see these in real code?
// A: Constantly. In React:
//    - Form state: Omit<User, 'id' | 'createdAt'>
//    - API PATCH body: Partial<Vehicle>
//    - Component props derived from a data type: Pick<User, 'name' | 'avatar'>
//    - Status maps: Record<Status, string>
