---
title: Objects
---
Everything else besides primitive data type values is an **object**.

Objects are **key-value** stores, like hash tables. But unlike hash tables, only
strings can be used as keys. The "keys" of an object are called *properties*.

The syntax to create a plain object is `{key: value, ...}`. For example:

```
var obj = {
  foo: 'bar',
  baz: 42
};
```
The JavaScript standard defines a couple of [built-in objects][] with additional
properties and specific internal behavior, must notably *arrays* and
*functions*, which are explained in the next slide.

[built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
