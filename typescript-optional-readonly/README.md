# TypeScript Optional and Readonly Properties

This repository contains my TypeScript practice code for learning optional and readonly properties in interfaces.

## Topics Covered

* Optional Properties (`?`)
* Readonly Properties (`readonly`)
* Interface Basics
* Object Creation
* Object Iteration with `Object.entries()`

## Concepts

### Optional Properties

Optional properties are not required when creating an object.

```ts
interface User {
  name: string;
  email: string;
  phoneNum?: number;
}
```

### Readonly Properties

Readonly properties can be assigned only once and cannot be modified later.

```ts
interface Product {
  readonly id: number;
  name: string;
}
```

## Files

* `app.ts` - TypeScript source code
* `app.js` - Compiled JavaScript code

## Purpose

This repository is part of my TypeScript learning journey and contains examples for practicing optional and readonly interface properties.

## Author

Muhammad Sheraz | Full Stack Web Developer
