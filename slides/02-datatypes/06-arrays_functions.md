---
title: "Built-in objects: Arrays and functions"
---

**Arrays** are objects, which treat properties with numeric keys (i.e. `0`,
`1`, `2`, ...) in a special way. For all purposes, they behave like arrays in
other languages.

JavaScript has a special syntax for creating arrays, `[value, value, ...]`:

```javascript
var arr = [1, 2];
```

---

**Functions** are the only kind of objects that are *callable*, and JavaScript
also has a special syntax for defining them:

```javascript
function foo() {
  console.log("I'm a function");
}
```

There are other ways to create functions, which will be explained later.
