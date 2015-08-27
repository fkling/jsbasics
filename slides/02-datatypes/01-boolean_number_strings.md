---
title: Booleans, numbers and strings
---

The **Boolean** data type has two values, `true` and `false`.

---
**Numbers** are [double precision floating point][float] numbers, following the
[IEEE 754 standard][ieee754]

This makes it very easy to work them, since you don't have to differentiate between
integer values and floating point values.

There are various ways how number values can be expressed in the source code:

```
var x = 5;    // "integer"
var y = -4.2; // "float"
var z = 5e3;  // = 5 * 10^3
```

---

**Strings** are sequences of unicode characters and can either be delimited with
a **single** or **double** quotation mark. Unlike in other languages, such as PHP,
both are interpreted in the exact same way.

Example:

```
var foo = "bar";
var bar = 'baz';
```

[float]: http://en.wikipedia.org/wiki/Double-precision_floating-point_format 
[ieee754]: http://en.wikipedia.org/wiki/IEEE_floating_point
