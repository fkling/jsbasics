---
title: Objects
---
Everything else besides primitive data type values is an **object**.

Objects are **key-value** stores, like hash tables. But unlike hash tables, only
strings can be used as keys. The "keys" of an object are called *properties*.

The syntax to create a plain object is `{key: value, ...}`. For example:

```javascript
var obj = {
  foo: 'bar',
  baz: 42
};
```

## References

Just like in Java and other object-oriented programming languages, objects are
represented as *references*. That means if a variable has an object as a value, 
it really has a reference to that object.

```js
var user = {name: 'Tom'}:
```

:::ascii
```
                         ┌──────────────┐
┌─────┬──────────┐       │  Object#123  │
│user │ ref:123 ◆┼──────▶├──────┬───────┤
└─────┴──────────┘       │ name │ "Tom" │
                         └──────┴───────┘
```
:::

Assigning the value to another variable makes both variables point to the same
object:

```js
var owner = user;
```

:::ascii
```
┌─────┬──────────┐       ┌──────────────┐
│user │ ref:123 ◆┼──┐    │  Object#123  │
├─────┼──────────┤  ├───▶├──────┬───────┤
│owner│ ref:123 ◆┼──┘    │ name │ "Tom" │
└─────┴──────────┘       └──────┴───────┘
```
:::

Assigning to `user.name` will therefore also "change" `owner.name`:

```js
user.name = 'Joe';
console.log(user.name, owner.name);
// Joe, Joe
```

:::ascii
```
┌─────┬──────────┐       ┌──────────────┐
│user │ ref:123 ◆┼──┐    │  Object#123  │
├─────┼──────────┤  ├───▶├──────┬───────┤
│owner│ ref:123 ◆┼──┘    │ name │ "Joe" │
└─────┴──────────┘       └──────┴───────┘
```
:::

But assigning a new value to either `user` or `owner` will result in only that
variable referring to the new value. The other variable will still refer to the
same value.

```js
owner = {name: 'Kim'};
```

:::ascii
```
                         ┌──────────────┐
                         │  Object#123  │
                    ┌───▶├──────┬───────┤
┌─────┬──────────┐  │    │ name │ "Joe" │
│user │ ref:123 ◆┼──┘    └──────┴───────┘
├─────┼──────────┤                       
│owner│ ref:456 ◆┼──┐    ┌──────────────┐
└─────┴──────────┘  │    │  Object#456  │
                    └───▶├──────┬───────┤
                         │ name │ "Kim" │
                         └──────┴───────┘
```
:::

---

The JavaScript standard defines a couple of [built-in objects][] with additional
properties and special internal behavior, must notably *arrays* and
*functions*, which are explained in the next slides.

[built-in objects]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
