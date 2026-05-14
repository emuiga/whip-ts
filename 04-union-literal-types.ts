/**
 * Exercise 04 — Union Types & Literal Types
 *
 * Reference: notes-04-union-literal-types.ts
 * Run with: npx ts-node 04-union-literal-types.ts
 */


// ============================================================
// EXERCISE 1 — Union types
// ============================================================

// Task 1a: Write a function `formatId` that accepts an `id` of type
//          string | number and returns a string.
//          If id is a string, return it uppercased.
//          If id is a number, return it prefixed with '#'.
//          e.g. formatId('abc') → 'ABC', formatId(42) → '#42'
//          Hint: use typeof to narrow.

//Solution
// function formatId(id: string | number): string {
//     if(typeof id === 'string'){
//         return id.toUpperCase();
//     } else {
//         return `#${id}`
//     }
// }

// console.log(formatId('abc'));
// console.log(formatId(42));

// Task 1b: Declare a variable `input` typed as string | number | null.
//          Assign it three different values in sequence and log each.
//          (Reassign the same variable — let, not const.)


//Solution
// let input: string | number | null = 'hello';
// console.log(input);

// input = 42;
// console.log(input);

// input = null;
// console.log(input);

/**
 * let not const                                                                                                                 
                                                                                                                                
  const locks the variable — you can never reassign it. Since we need to reassign input three times, it has to be let.          
                                                                                                                                
  The annotation                                                                                                                
                                                                                                                                
  let input: string | number | null = 'hello';                                                                                  
                                                                                                                                
  You annotate right after the variable name, same as a function parameter. The union string | number | null tells TypeScript:
  "this variable is allowed to hold any of these three types across its lifetime."

  Reassignment

  input = 42;     // fine — number is in the union
  input = null;   // fine — null is in the union

  TypeScript tracks what type input currently holds at each point in the code. If you tried input = true, it would error
  immediately — boolean isn't in the union.

  Why null is in the union

  null means "intentionally empty — no value". This is the correct way to model a variable that hasn't been set yet, or has been
   cleared. Without it in the union, you couldn't assign null at all.

 */

// ============================================================
// EXERCISE 2 — Literal types
// ============================================================

// Task 2a: Define a type alias `VehicleStatus` with these values only:
//          'available' | 'rented' | 'maintenance'

//solution
// type VehicleStatus = 'available' | 'rented' | 'maintenance';

// Task 2b: Define a type alias `BookingStatus` with:
//          'pending' | 'confirmed' | 'cancelled'

//solution
// type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

// Task 2c: Define an interface `Booking` with:
//          - id: number
//          - customer: string
//          - vehicleStatus: VehicleStatus
//          - bookingStatus: BookingStatus

//solution
// interface Booking {
//      id: number;
//      customer: string;
//      vehicleStatus: VehicleStatus;
//      bookingStatus: BookingStatus;
// }
// Task 2d: Create two Booking objects — one with valid values,
//          then try assigning an invalid status (e.g. 'approved') and
//          read the TypeScript error. Remove the broken line.

//solution
// let booking: Booking = {
//     id: 3,
//     customer: 'Alice',
//     vehicleStatus: 'available',
//     bookingStatus: 'pending'
// }

// //invalid 
// let booking: Booking = {
//     id: 3,
//     customer: 'Alice',
//     vehicleStatus: 'approved',
//     bookingStatus: 'pending'
// }
// function summariseBooking(booking: Booking): string {
//     return `Booking #${booking.id} | ${booking.customer} | ${booking.vehicleStatus} | ${booking.bookingStatus}`
// }

// console.log(summariseBooking(booking))
// ============================================================
// EXERCISE 3 — Narrowing
// ============================================================

// Task 3a: Write a function `describe` that accepts a value of type
//          string | number | boolean and returns a string describing it.
//          e.g. describe('hello') → 'String: hello'
//               describe(42)      → 'Number: 42'
//               describe(true)    → 'Boolean: true'
//          Use typeof narrowing for all three cases.

//soltuion
// function describe(value: string | number | boolean): string{
//     if(typeof value === 'string'){
//         return `String: ${value}`
//     }else if(typeof value === 'number'){
//         return `Number: ${value}`
//     }else{
//         return `Boolean: ${value}`
//     }
// }

// console.log(describe('hello'));
// console.log(describe(42));
// console.log(describe(true));

// Task 3b: Write a function `getCustomerName` that accepts
//          name: string | null | undefined
//          and returns the name if present, or 'Guest' as a fallback.

//solution
// function getCustomerName(name: string | null | undefined): string{
//     if(typeof name === 'string'){
//         return `Name: ${name}`
//     }else{
//         return `Guest`
//     }
// }
// console.log(getCustomerName('Dwayne'));
// console.log(getCustomerName(null));
// console.log(getCustomerName(undefined));


// ============================================================
// EXERCISE 4 — Discriminated union
// ============================================================

// Task 4: Define these three types:
//
//   type SuccessResult = { status: 'success'; data: string[] }
//   type ErrorResult   = { status: 'error';   message: string }
//   type LoadingResult = { status: 'loading' }
//   type Result = SuccessResult | ErrorResult | LoadingResult
//
// Write a function `handleResult` that accepts a Result and logs:
//   - If success: 'Data: ' + data.join(', ')
//   - If error:   'Error: ' + message
//   - If loading: 'Loading...'
//
// Call it three times with each variant and confirm the output.

//soltuion
 type SuccessResult = { status: 'success'; data: string[] }
 type ErrorResult   = { status: 'error';   message: string }
 type LoadingResult = { status: 'loading' }
 type Result = SuccessResult | ErrorResult | LoadingResult

 function handleResult(result: Result){
    if(result.status === 'success'){
        console.log('Data: ' + result.data.join(', '))
    }else if(result.status==='error'){
        console.log(`'Error: ' ${result.message}`)
    }else{
        console.log('Loading...')
    }
 }

handleResult({ status: 'success', data: ['car', 'van', 'bike'] });
handleResult({ status: 'error', message: 'Something went wrong' });
  handleResult({ status: 'loading' });
