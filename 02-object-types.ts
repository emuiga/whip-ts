/**
 * Exercise 02 — Object Types
 *
 * Reference: notes-object-types.ts
 * Run with: npx ts-node 02-object-types.ts
 */


// ============================================================
// EXERCISE 1 — Define an interface
// ============================================================

// Task 1a: Define an interface called `Vehicle` with these fields:
//          - id: number
//          - make: string
//          - model: string
//          - pricePerDay: number
//          - available: boolean


interface Vehicle {
    id: number
    make: string
    model: string
    pricePerDay: number
    available: boolean
}
// Task 1b: Create two objects that use the `Vehicle` interface.
//          One should be a Toyota, the other a Nissan.

const car1: Vehicle = {
    id: 1,
    make: 'Toyota',
    model: 'Corolla',
    pricePerDay: 4599,
    available: true
}

const car2: Vehicle = {
    id: 2,
    make: 'Nissan',
    model: 'Altima',
    pricePerDay: 4599,
    available: true
}
// Task 1c: Write a function `describeVehicle` that takes a Vehicle
//          and returns a string like: 'Toyota Corolla — KES 4,500/day'
//          Hint: pricePerDay.toLocaleString() for the formatting.
//          Call it on both vehicles and log the results.

function describeVehicle(vehicle: Vehicle): string {
    return `${vehicle.make} ${vehicle.model} - KES ${vehicle.pricePerDay.toLocaleString()}/day`
}

    console.log(describeVehicle(car1))
    console.log(describeVehicle(car2))


// ============================================================
// EXERCISE 2 — Optional and readonly
// ============================================================

// Task 2a: Define an interface called `Customer` with:
//          - id: number (readonly)
//          - name: string
//          - email: string
//          - phone: string (optional)
//          - notes: string (optional)

interface Customer {
        readonly id: number 
        name: string
        email: string
        phone?: string 
        notes?: string 
}

// Task 2b: Create two customer objects:
//          - one with all fields filled in
//          - one with only the required fields

const customer3: Customer = {
    id: 1, 
    name: 'Steve',
    email: 'steve@gmail.com',
    phone: '+2547',
    notes: 'Bodega' 
}

const customer4: Customer = {
    id: 2, 
    name: 'Muiga',
    email: 'muiga@gmail.com',
}

 // Task 2c: Try to change the `id` of one customer after creation.
//          Read the TypeScript error, then remove that line.

// customer3.id = 23;
// error: Cannot assign to 'id' because it is a read-only property.ts(2540)

// ============================================================
// EXERCISE 3 — Nested interfaces
// ============================================================

// Task 3a: Define an interface `Address` with:
//          - street: string
//          - city: string
//          - country: string

interface Address {
    street: string;
    city: string;
    country: string
}

// Task 3b: Define an interface `Company` with:
//          - id: number
//          - name: string
//          - address: Address   ← uses the Address interface

interface Company {
    id: number;
    name: string;
    address: Address
}
// Task 3c: Create a Company object and log company.address.city

const company: Company = {
    id:5,
    name: 'Origin',
    address: {
        street: 'Kijabe',
        city: 'Nakuru',
        country: 'Mongolia'
    }
}

console.log(company.address.city)
// ============================================================
// EXERCISE 4 — Putting it together
// ============================================================

// Task 4: Define an interface `Booking` with:
//         - id: number (readonly)
//         - customer: string
//         - vehicle: string
//         - days: number
//         - amount: number
//         - status: string

interface Booking {
    readonly id: number;
    customer: string;
    vehicle: string;
    days: number;
    amount: number;
    status: string
}

// Write a function `summariseBooking` that takes a Booking
// and returns a string like:
// 'Booking #1 | Alice | Toyota Corolla | 3 days | KES 12,000 | confirmed'
// Create one booking object and log the summary.

const booking: Booking = {
    id: 3,
    customer: 'Alice',
    vehicle: 'Toyota Corolla',
    days: 3,
    amount: 12000,
    status: 'confirmed'
}
function summariseBooking(booking: Booking): string {
    return `Booking #${booking.id} | ${booking.customer} | ${booking.vehicle} | ${booking.days} days | KES ${booking.amount.toLocaleString()} | ${booking.status}`
}

console.log(summariseBooking(booking))
