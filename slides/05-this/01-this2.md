---
toc: this - another example
style: |
  h1 {
    text-align: center
  }
---
# `this` - another example

```js
function say() {
  console.log('My name is ' + this.name);
}

var felix = {
  name: 'Felix',
  sayName: say
};

var sarah = {
  name: 'Sarah',
  sayName: say
};

felix.sayName(); // My name is Felix
sarah.sayName(); // My name is Sarah
foo.call({name: 'Anonymous'}); // My name is Anonymous
foo(); // My names is undefined
```

In this example we define a single a function that uses `this` internally. The
function is then assigned to different objects as property. The output the
function produces depends on on which object the function is called (*how* it is
called).
