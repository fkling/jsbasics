---
title: Prototypes
chapter: Constructors & Prototypes
---

JavaScript is a [prototype-based][] language, not [class-based][] like other
languages. This means, instead of every object being an instance of a class,
every object has an internal reference to a **prototype**. A prototype is just
an object and has a prototype as well. The prototype, the prototype's prototype,
etc form the **prototype chain**.

Whenever a property is **accessed** on an object and **not found** on the object
itself, it is searched for in the object's prototype chain.

Simple example:

```javascript
var foo = {answer: 42};
// Creates a new object `bar` whose prototype is `foo`
var bar = Object.create(foo);
console.log(bar.hasOwnProperty('answer'));
console.log('answer' in bar);
console.log(bar.answer);
```

In this example we created an object `bar` and set its prototype to `foo`.
Note that we are not setting any property on `bar` itself. The property `answer`
is looked up in its prototype chain (consisting of `foo` in this case).

This is how the built-in object "types" get a certain set of properties. Arrays
for example have [`Array.prototype`][array] as prototype, which in turn has
[`Object.prototype`][object] as prototype. `Array.prototype` has properties such
as `push`, `pop`, `every`, etc.

[prototype-based]: http://en.wikipedia.org/wiki/Prototype-based_programming
[class-based]: http://en.wikipedia.org/wiki/Class-based_programming
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
[object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
