---
title: Scope
chapter: Scope
---
Unlike other programming languages, JavaScript only has **function scope**, not
block scope. In the following example, all variables are visible throughout the
function:

```javascript
function foo() {
   var bar = 42;
   // loop
   for (var i = 0; i < 10; i++) {
     var j = i;
   }

   console.log(bar); // 42
   console.log(i);   // 10
   console.log(j);   // 9
 }
```

In other languages, like Java, the variables `i` or `j` would not be available
where the above code tries to access them.
