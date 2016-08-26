---
title: Control structures
---
JavaScript provides the same control structures known from other C-like
languages:

- `if (...) { ... } else if (...) { ... } else { ... }`

- `while (...) { ... }` and `do { ... } while (...)`

- `for (...; ...; ...)  { ... }`

- `switch (...) { case ...: ... }`

Additionally, JavaScript provides the `for...in` loop to iterate over properties
of objects:

```javascript
for (var prop in obj) {
  console.log(prop, obj[prop]);
}
```

`prop` is a variable containing the property *name*. You can use bracket
notation to access the property values.
