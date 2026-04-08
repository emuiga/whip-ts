/**
 * Exercise 08 — Utility Types
 *
 * Reference: notes-08-utility-types.ts
 * Run with: npx ts-node 08-utility-types.ts
 */

// Base types — use these throughout the exercises. Do not modify.

interface Vehicle {
  id: number;
  make: string;
  model: string;
  pricePerDay: number;
  available: boolean;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

type BookingStatus = 'pending' | 'confirmed' | 'cancelled';


// ============================================================
// EXERCISE 1 — Partial and Required
// ============================================================

// Task 1a: Create a type `VehicleUpdate` using Partial<Vehicle>.
//          Write a function `updateVehicle(id: number, changes: VehicleUpdate): void`
//          that logs the id and changes.
//          Call it with just { pricePerDay: 5500 } — confirm it works without
//          providing all Vehicle fields.

// Task 1b: Define this interface:
//          interface DraftUser { name?: string; email?: string; role?: string }
//
//          Create a type `CompleteUser` using Required<DraftUser>.
//          Try creating an object of type CompleteUser with a missing field
//          — confirm TypeScript errors. Then provide all fields.


// ============================================================
// EXERCISE 2 — Pick and Omit
// ============================================================

// Task 2a: Create a type `VehicleCard` using Pick<Vehicle> with only:
//          'make', 'model', 'pricePerDay'
//          Write a function `renderCard(v: VehicleCard): string`
//          that returns: 'Toyota Corolla — KES 4,500/day'
//          Create a VehicleCard object and call renderCard.

// Task 2b: Create a type `NewVehicleInput` using Omit<Vehicle> to exclude 'id'.
//          This simulates a form input — id is assigned by the server.
//          Write a function `createVehicle(input: NewVehicleInput): Vehicle`
//          that assigns a random id (use Math.floor(Math.random() * 1000))
//          and returns the full Vehicle.
//          Call it and log the result.

// Task 2c: Create a type `PublicUser` using Omit<User> to exclude 'id' and 'createdAt'.
//          Log the type by creating an object of that type.


// ============================================================
// EXERCISE 3 — Record
// ============================================================

// Task 3a: Create a Record type `StatusLabels` where:
//          keys are BookingStatus values
//          values are strings (human-readable labels)
//          e.g. { pending: 'Awaiting Confirmation', confirmed: 'Confirmed', cancelled: 'Cancelled' }
//          If you miss a key, TypeScript should error.

// Task 3b: Create a Record<string, number> called `vehicleCount`
//          that maps vehicle make names to how many are in the fleet.
//          e.g. { Toyota: 3, Nissan: 2, Subaru: 1 }


// ============================================================
// EXERCISE 4 — Combining utility types
// ============================================================

// Task 4a: Create a type `EditableVehicle` that is Partial<Omit<Vehicle, 'id'>>.
//          This represents fields you can edit — everything except id, all optional.
//          Write a function `applyEdits(vehicle: Vehicle, edits: EditableVehicle): Vehicle`
//          that returns a new Vehicle with the edits applied (use spread).

// Task 4b: Create a type `VehicleSummary` using Pick to select:
//          'make', 'model', 'available'
//          Use .map() on the fleet array below to return VehicleSummary[].

const fleet: Vehicle[] = [
  { id: 1, make: 'Toyota', model: 'Corolla',  pricePerDay: 4500, available: true  },
  { id: 2, make: 'Nissan', model: 'X-Trail',  pricePerDay: 6000, available: false },
  { id: 3, make: 'Subaru', model: 'Outback',  pricePerDay: 7000, available: true  },
];
