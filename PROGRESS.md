# Learning Progress — TypeScript → Next.js

## PHASE 1: JavaScript Prerequisites (DONE)

### Topic 1 — Functions Deep Dive ✅
- Function declarations vs expressions vs arrow functions
- Parameters, return values, default parameters
- `this` binding and why arrow functions are different
- Higher-order functions
- Pure vs impure functions

### Topic 2 — Async JavaScript ✅
- Single-threaded JS, call stack, event loop
- Microtask queue (Promises) vs macrotask queue (setTimeout)
- Callbacks and callback hell
- Promise states: pending / fulfilled / rejected
- `.then()` chaining, `.catch()`, `.finally()`
- `async/await` as syntactic sugar over Promises
- `try/catch/finally` with async functions
- `Promise.all()` for parallel execution
- Sequential vs parallel awaits
- `fetch()` API — double await, `response.ok` check

### Topic 3 — Objects & Arrays ✅
- Object creation, dot notation vs bracket notation, nested access
- Object destructuring, nested destructuring
- Rename while destructuring, default values in destructuring
- Array destructuring — positional, skipping elements with commas
- Spread — copy, merge, update objects and arrays
- `.map()`, `.filter()`, `.find()`, `.reduce()`
- Chaining array methods
- Immutability — never mutate, always create new

### Topic 4 — Scope & Closures ✅ (understood, skipped exercises)

---

## PHASE 2: TypeScript Basics (IN PROGRESS)

### Topic 5 — Why TypeScript Exists ✅
- Catches bugs at compile time, not runtime
- Compiles to plain JS — browser never sees `.ts`
- Needs `tsc` or `ts-node` to run

### Topic 6 — Primitive Types ✅
Files: `notes-primitive-types.ts`, `01-primitive-types.ts`
- Type annotation syntax (`: string`, `: number`, etc.)
- Type inference — when TS figures it out automatically
- When to annotate vs when to let TS infer
- `string`, `number`, `boolean`, `null`, `undefined`, `void`
- Function parameter and return type annotations
- `void` vs `undefined`
- `any` — turns off type checking (avoid)

### Topic 7 — Object Types ✅
Files: `notes-object-types.ts`, `02-object-types.ts`
- Interfaces — describing object shapes
- Type aliases — `type` vs `interface`
- Optional properties (`?`)
- Readonly properties
- Nested interfaces
- Typed function parameters and return types

### Topic 8 — Arrays & Tuples ✅
Files: `notes-arrays-tuples.ts`, `03-arrays-tuples.ts`
- Typed arrays: `string[]` vs `Array<string>`
- Arrays of objects: `Vehicle[]`
- TypeScript inference through `.map()` and `.filter()`
- Tuples — fixed-length, positional, mixed types
- Named tuples
- Where tuples appear: `useState`, coordinates, CSV rows

### Topic 9 — Union & Literal Types ✅
Files: `notes-04-union-literal-types.ts`, `04-union-literal-types.ts`
- Union types: `string | number`
- Literal types: `'pending' | 'confirmed' | 'cancelled'`
- Narrowing with `typeof`
- Discriminated unions (preview)
- React state and props patterns

### Topic 10 — Type Inference & Compatibility ✅
Files: `notes-05-type-inference.ts`, `05-type-inference.ts`
- When TypeScript infers automatically
- When to annotate explicitly
- Type widening (`const` vs `let`)
- `as const` — freezing to literal types
- Structural typing — shape matters, not name

---

## PHASE 3: TypeScript for Functions

### Topic 11 — Typing Functions ⬜
Files: `notes-06-typing-functions.ts`, `06-typing-functions.ts`
- Optional parameters (`?`)
- Default parameter values
- Rest parameters (`...args: string[]`)
- Function type expressions (`type Callback = (id: number) => void`)
- `void` vs `undefined` return types

### Topic 12 — Generics ⬜
Files: `notes-07-generics.ts`, `07-generics.ts`
- `<T>` — type placeholder
- Generic functions, generic interfaces
- Multiple type parameters
- Generic constraints with `extends`
- Why React uses generics: `useState<string>('')`

---

## PHASE 4: Advanced TypeScript for React

### Topic 13 — Utility Types ⬜
Files: `notes-08-utility-types.ts`, `08-utility-types.ts`
- `Partial<T>` — make all properties optional
- `Required<T>` — make all properties required
- `Pick<T, K>` — select specific properties
- `Omit<T, K>` — exclude specific properties
- `Record<K, T>` — object type from keys + value type
- `ReturnType<T>` — extract function return type
- Combining utility types

### Topic 14 — Type Guards & Narrowing ⬜
Files: `notes-09-type-guards.ts`, `09-type-guards.ts`
- `typeof` checks for primitives
- Truthiness narrowing (null/undefined checks)
- `in` operator — check if property exists
- Discriminated unions with `type` field
- Type predicates (`value is SomeType`)
- `instanceof` for class instances
- `unknown` vs `any`

### Topic 15 — Advanced Patterns (Light Touch) ⬜
Files: `notes-10-advanced-patterns.ts`, `10-advanced-patterns.ts`
- `keyof` — get keys of a type as a union
- `as const` — freeze values to literal types
- Mapped types — transform every field in a type
- Conditional types — `T extends U ? A : B`
- Template literal types

---

## PHASE 5: React with TypeScript (AHEAD)
- Components as functions that return JSX
- Virtual DOM and reconciliation
- Typing props with interfaces
- Optional props and default values
- `useState<T>()` hook
- `useEffect` — side effects, dependency array, cleanup
- `useRef`, `useMemo`, `useCallback`, `useContext`
- Event handlers with typed events
- Rendering lists with `.map()`
- Conditional rendering

## PHASE 6: Next.js (AHEAD)
- App Router — file-based routing
- Server vs Client components (`'use client'`)
- Data fetching — `fetch()` in server components
- API routes — Route Handlers
- Dynamic routes (`[id]`)
- Loading and error states
- Environment variables
- Deployment to Vercel
