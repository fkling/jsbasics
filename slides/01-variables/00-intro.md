title: Variables
chapter: Variables
---
Variables are declared with the `var` keyword. JavaScript is
**dynamically typed** so every variable can hold a value of any data type.

Variables can be declared **without an initial value**.

Some example declarations:

```
var foo;
var bar = 42;
var foo, bar, baz;
var foo = 42, bar = 'baz', z;
```

---

Valid characters for variable names include [a wide range of **unicode characters**](http://mathiasbynens.be/notes/javascript-identifiers).
However, the name **must** start with a letter, `_` or `$`. Not doing so will result
in a syntax error.

Examples:

```
var π = 3.141;
var _foo = π;
var 0_bar = '...'; // Syntax error
```

---

Trying to **read** an *undeclared variable* results in a runtime error:
```
var foo;
console.log(bar); // ReferenceError: bar is not defined.
```

  However, **writing** to an undeclared variable is valid by default. It will
  create an **implicit global variable** and should thus be avoided:
```
function foo() {
  bar = 42;
}
foo();
console.log(bar); // no error
```

<div class="alert alert-info">

If code runs in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode"><strong>strict mode</strong></a>, assigning to an undeclared variable throws an <strong>error</strong>.

</div>
