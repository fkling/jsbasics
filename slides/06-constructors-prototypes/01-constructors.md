title: Constructor functions
---
Even though JavaScript technically doesn't have classes, it has something
similar: **constructor functions**.

Constructor functions are functions which **construct objects**. Technically
*every* function can be used as constructor function, it just has to be called
with the [`new` operator][new]:

```js
function Person(name) {
   this.name = name;
}

var felix = new Person('Felix');
console.log(felix.name);
```

Inside the constructor function, `this` refers to a new, empty object. The
result of the whole `new` expression (`new Person(...)`) is that object. You can
think about it as if the function would implicitly `return this;`.

Calling a function with `new` has another effect: The prototype of the new object
is the object referred to by the function's `prototype` property.

Example:

```
function Person(name) {
   this.name = name;
}
Person.prototype.sayName = function(){ return this.name; };

var felix = new Person('Felix');
console.log(felix.sayName());
```

Given the example above, use `console.dir(felix);` to get a better understanding
of the structure of the object (including it's prototype chain).

<div class="alert alert-warning">
  <strong>Note</strong>: <em>Assignments</em> to properties will (almost) always
  create or update a property on object itself, even if a property with the same
  name already exists in the prototype chain. The property in the prototype
  chain is then <em>shadowed</em>, similar to variable shadowing in scopes.
</div>

[new]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
