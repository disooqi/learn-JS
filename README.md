# learn-JS
- [ ] dsfdsdfsd
- [x] cvvcvcxv
- [ ] dsfdsdfsd
- [ ] dsfdsdfsd


<a href="http://www.youtube.com/watch?feature=player_embedded&v=e-5obm1G_FY" target="_blank">
  <img src="http://img.youtube.com/vi/e-5obm1G_FY/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Bv_5Zv5c-Ts" target="_blank">
  <img src="http://img.youtube.com/vi/Bv_5Zv5c-Ts/0.jpg" 
  alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=e-5obm1G_FY" target="_blank">
  <img src="http://img.youtube.com/vi/2nZiB1JItbY/0.jpg" 
  alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=JEq7Ehw-qk8" target="_blank">
  <img src="http://img.youtube.com/vi/JEq7Ehw-qk8/0.jpg" 
  alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>
<a href="https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f" target="_blank">
  <img src="http://img.youtube.com/vi/HkFlM73G-hk/0.jpg" 
  alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>
<a href="http://www.youtube.com/watch?feature=player_embedded&v=PFmuCDHHpwk" target="_blank">
  <img src="http://img.youtube.com/vi/PFmuCDHHpwk/0.jpg" 
  alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" />
</a>

* Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.
  
* The script will behave as if it was located exactly where the <script> tag is located.
* If you re-declare a JavaScript variable, it will not lose its value.
* If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
* JavaScript evaluates expressions from left to right. Different sequences can produce different results: `var x = 16 + 4 + "Volvo";` versus `var x = "Volvo" + 16 + 4;`
* Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
* Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
  
* Before 2015, using the var keyword was the only way to declare a JavaScript variable.
* The 2015 version of JavaScript (ES6) allows the use of the const keyword to define a variable that cannot be reassigned, and the let keyword to define a variable with restricted scope.

* Before ES2015, JavaScript had only two types of scope: **Global Scope** and **Function Scope**.
* Variables declared with the `var keyword` cannot have Block Scope. Variables declared inside a block {} can be accessed from outside the block. Before ES2015 JavaScript did not have Block Scope. Variables declared with the `let keyword` can have Block Scope.
* When `let` is used to declare the i variable in a loop, the i variable will only be visible within the loop.
* Variables declared with `var` and `let` are quite similar when declared inside a function (i.e. function scope).
* Variables declared with `var` and `let` are quite similar when declared outside a block (i.e. global scope).
* With JavaScript, the global scope is the *JavaScript environment*. In HTML, the global scope is the *window object*.
* Global variables defined with the `var` keyword belong to the window object. Global variables defined with the let keyword do not belong to the `window object`.

### Redeclaring
variable           | Redeclaring with `let`        | Redeclaring with `var`         | Redeclaring to `const`
------------       | ----------------------------- |  -------------                 | ----------------------
var x = 5;         | not allowed in the same scope | allowed anywhere               | not allowed in the same scope
let x = 5;         | not allowed in the same scope | not allowed in the same scope  | not allowed in the same scope
const x = 5;       | not allowed in the same scope | not allowed in the same scope  | not allowed in the same scope

* Variables defined with `var` are *hoisted* to the top and can be initialized at any time (i.e. You can use the variable before it is declared). Variables defined with let are hoisted to the top of the block, but not initialized. Variables defined with `let` are hoisted to the top of the block, but not initialized (i.e. The block of code is aware of the variable, but it cannot be used until it has been declared).
* Variables defined with `const` behave like let variables, except they cannot be reassigned.
* JavaScript `const` variables must be assigned a value when they are declared.

### Datatypes
* JavaScript variables can hold many data types: numbers, strings, objects and more.
* JavaScript has only one type of numbers.
* Extra large or extra small numbers can be written with scientific (exponential) notation: `var y = 123e5;`
* Booleans can only have two values: `true` or `false`.
* JavaScript arrays are written with square brackets: `var cars = ["Saab", "Volvo", "BMW"];`
* The `typeof` operator returns `object` for arrays because in JavaScript arrays are objects.
* JavaScript objects are written with curly braces: `var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};`
* You can use the JavaScript `typeof` operator to find the type of a JavaScript variable: `typeof "John Doe"`
* In JavaScript, a variable without a value, has the value `undefined`. The type is also `undefined`. Any variable can be emptied, by setting the value to `undefined`: `car = undefined;`
* In JavaScript `null` is "nothing". It is supposed to be something that doesn't exist. in JavaScript, the data type of `null` is an *object*.
* You can empty an object by setting it to `null`. You can also empty an object by setting it to `undefined`.
* `undefined` and `null` are equal in value but different in type: 
```javascript
null === undefined      // false
null == undefined       // true
```
* Primitive types are `string`, `number`, `boolean`, `undefined`.
* The `typeof` operator can return one of two complex types: `function` or `object`.

### Functions
* Function **parameters** are listed inside the parentheses () in the function definition. Function **arguments** are the values received by the function when it is invoked.
* `funcName` refers to the function object, and `funcName()` refers to the function result. Accessing a function without () will return the function object instead of the function result.
* The _name:values_ pairs in JavaScript objects are called **properties**.
* You can access object properties in two ways: `objectName.propertyName` or `objectName["propertyName"]`
* A method is a function stored as a property: `fullName : function() { return this.firstName + " " + this.lastName; }`.
* In a function definition, `this` refers to the "owner" of the function.
* When a JavaScript variable is declared with the keyword `new`, the variable is created as an object: 
```javascript

var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       // Declares z as a Boolean object
```
* Avoid `String`, `Number`, and `Boolean` objects. They complicate your code and slow down execution speed.
