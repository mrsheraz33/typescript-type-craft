# TypeScript Narrowing and Type Assertions

This repository contains my TypeScript practice code for learning type narrowing, type assertions, and DOM manipulation.

## Topics Covered

* Type Narrowing
* Type Assertions
* Type Guards (`typeof`)
* DOM Manipulation
* HTML Element Type Casting

## Concepts

### Type Narrowing

TypeScript can narrow a union type based on conditions.

```ts
const userData = (val: string | number) => {
  if (typeof val === "string") {
    return val.toUpperCase();
  }

  return val.toFixed(2);
};
```

### Type Assertions

Type assertions tell TypeScript the specific type of a value.

```ts
const value: any = "Hello, Pakistan";

const length = (value as string).length;
```

### DOM Manipulation

Type assertions are commonly used when working with DOM elements.

```ts
const input = document.querySelector("#input") as HTMLInputElement;

input.value = "Hello Sheraz";
```

```ts
const link = document.querySelector("#link") as HTMLAnchorElement;

link.href = "https://google.com";
```

## Files

* app.ts - TypeScript source code
* app.js - Compiled JavaScript code
* index.html - Basic Html code

## Purpose

This repository is part of my TypeScript learning journey and contains examples for practicing type narrowing, assertions, and DOM element handling.

## Author

Muhammad Sheraz | Full Stack Web Developer
