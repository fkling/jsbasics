---
title: Variables
chapter: Variables
---
Variables are declared with the `var` keyword. JavaScript is
**dynamically typed** so every variable can hold a value of any data type.

Variables can be declared **without an initial value**.

Some example declarations:

```javascript
var foo;
var bar = 42;
var foo, bar, baz;
var foo = 42, bar = 'baz', z;
```

Variables that don't explicitly get assigned an initial value have the value 
`undefined`.

---

Valid characters for variable names include [a wide range of **unicode characters**](http://mathiasbynens.be/notes/javascript-identifiers).
However, the name **must** start with a letter, `_` or `$`. Not doing so will result
in a syntax error.

Examples:

```javascript
var π = 3.141;
var _foo = π;
var 0_bar = '...'; // Syntax error
```

---

Trying to **read** an *undeclared variable* results in a runtime error:

```javascript
var foo;
console.log(bar); // ReferenceError: bar is not defined.
```

However, **writing** to an undeclared variable is valid by default. It will
create an **implicit global variable** and should thus be avoided:

```javascript
function foo() {
  bar = 42;
}
foo();
console.log(bar); // no error
```

<div class="callout primary">

  If code runs in **[strict mode][]**, assigning to an undeclared variable 
  throws an **error**.

</div>

[strict mode]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
