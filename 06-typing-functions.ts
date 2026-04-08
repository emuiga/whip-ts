/**
 * Exercise 06 — Typing Functions
 *
 * Reference: notes-06-typing-functions.ts
 * Run with: npx ts-node 06-typing-functions.ts
 */


// ============================================================
// EXERCISE 1 — Optional and default parameters
// ============================================================

// Task 1a: Write a function `createGreeting` that takes:
//          - name: string (required)
//          - title: string (optional)
//          Returns: 'Hello, Dr. Alice' if title given, 'Hello, Alice' if not.

// Task 1b: Write a function `calculateRental` that takes:
//          - pricePerDay: number
//          - days: number
//          - discount: number (default = 0)
//          Returns the total after discount: pricePerDay * days * (1 - discount / 100)
//          Call it twice — once with a discount, once without.


// ============================================================
// EXERCISE 2 — Rest parameters
// ============================================================

// Task 2a: Write a function `mergeNames` that accepts any number of
//          string arguments and returns them joined with ' & '.
//          e.g. mergeNames('Alice', 'Brian', 'Eve') → 'Alice & Brian & Eve'

// Task 2b: Write a function `logEvent` that takes:
//          - eventType: string (required, first param)
//          - ...details: string[] (rest — any number of detail strings)
//          Logs: '[eventType] detail1, detail2, ...'
//          e.g. logEvent('BOOKING', 'Alice', 'Toyota Corolla', '3 days')
//               → '[BOOKING] Alice, Toyota Corolla, 3 days'


// ============================================================
// EXERCISE 3 — Function type expressions
// ============================================================

// Task 3a: Define a type alias `Formatter` for a function that takes
//          a number and returns a string.
//          Write two functions that match this type:
//          - one that formats as KES currency: 'KES 12,000'
//          - one that formats as a percentage: '85%'

// Task 3b: Write a function `applyFormatter` that takes:
//          - value: number
//          - formatter: Formatter
//          and returns the result of calling formatter(value).
//          Call it with both formatters from 3a.


// ============================================================
// EXERCISE 4 — Putting it together
// ============================================================

// Task 4: Build a small booking summary utility.
//
//         Define these types:
//         interface Booking { id: number; customer: string; amount: number; status: string }
//         type SummaryFormatter = (booking: Booking) => string
//
//         Write two formatters:
//         - shortFormat: 'Booking #1 — Alice — KES 12,000'
//         - longFormat:  'Booking #1 | Customer: Alice | Amount: KES 12,000 | Status: confirmed'
//
//         Write a function `printBooking` that takes a Booking and a SummaryFormatter
//         and logs the result.
//
//         Create one booking and call printBooking twice — once with each formatter.
