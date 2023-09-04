---
title: General
description: General TypeScript
---

# General

## Types vs Interfaces

- [Type vs Interface: Which Should You Use In 2023?](https://www.totaltypescript.com/type-vs-interface-which-should-you-use) - Matt Pocock | Jul 31, 2023
- [TypeScript: Should you use Types or Interfaces?](https://www.youtube.com/watch?v=zM9UPcIyyhQ) - Matt Pocock | Dec. 5 2022
- [Favour TypeScript Types Over Interfaces](https://www.lloydatkinson.net/posts/2023/favour-typescript-types-over-interfaces/) - Lloyd Atkinson | May 1, 2023

### TLDR:

`type` and `interface` are [very similar](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces).

For object inheritance, the [TypeScript performance wiki](https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections) recommends using `interface` over `type` intersections for better compile-time performance.

Using `type` allows the type properties to be visible when viewing the type definition in the hover tooltip in Visual Studio Code. The definition shown for an `interface` does not include its properties. It is worth looking into whether this is the case for other popular IDEs.

Conclusion:

1. Use `interface` for object inheritance
2. Coose one:
   - Use `interface` for all other definitions for consistency
   - Use `type` for all other definitions for improved IDE benefits
