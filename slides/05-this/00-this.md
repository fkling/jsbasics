---
toc: this
chapter: this
style: |
  h1 {
    text-align: center
  }
---
# `this`

[**`this`**][mdn] is a special "variable" which implicitly exists in every
function. It can be thought of being similar to Java's `this` and Python's
`self`, but it's much more flexible than that.

<div class="alert alert-warning">
  <strong>Important</strong>: The value of `this` is determined when the
  function is <strong>called</strong>, not when the function is
  <em>defined</em>.
</div>

Given the following function:

```js
function foo() { console.log(this); }
```

these would be the values of `this` if called in those specific ways:

```js
// "normal call": global object / window in browsers
foo();

// as object "method": to the object
var obj = {method: foo};
obj.method();

// via .call / .apply: To the value passed as first argument
foo.call(bar);
```

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
