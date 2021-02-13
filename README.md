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

### Events
* Event handler attributes:
  - https://www.w3schools.com/jsref/dom_obj_event.asp

### Strings
* You can use single or double quotes to define string literals.
* If a JavaScript statement does not fit on one line, the best place to break it is after an operator. You can also break up a code line within a text string with a single backslash. The `\` method is not the preferred method. It might not have universal support. Some browsers do not allow spaces behind the `\` character. A safer way to break up a string, is to use string addition (i.e. concatenation).
* Note the difference between `(x==y)` and `(x===y)`. Comparing two JavaScript objects will always return `false`.
* Primitive values, like "hello world", cannot have properties or methods (because they are not objects). But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

```javascript
var str = "Mohamed Eldesouki; 38 years   "; 
str.length;
str.indexOf("desouki"); //  return -1 if the text is not found.
str.lastIndexOf("o"); // returns the index of the last occurrence of a specified text
str.search("\d+")
var new_str = str.slice(10, 19); // returns the extracted part in a new string (end not included). work exactly as Python slicing
new_str = str.substring(7, 13); // substring() is similar to slice(). The difference is that substring() cannot accept negative indexes.
new_str = str.substr(7, 13);    // substr()    is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
new_str = str.replace("Eldesouki", "Ibrahim"); // does not change the string it is called on. It returns a new string. replaces only the first match, and is case sensitive
new_str = str.replace(/ELDESOUKI/i, "Ibrahim"); // To replace case insensitive, use a regular expression with an /i flag (insensitive). Note that regular expressions are written without quotes.

new_str = str.concat(" ", text2);
// To replace all matches, use a regular expression with a /g flag (global match)

```
* All string methods return a new string. They don't modify the original string. Formally said: Strings are immutable: Strings cannot be changed, only replaced. 
* You can also use the replace solution above to add a trim function to the JavaScript `String.prototype`
```javascript
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
var str = "       Hello World!        ";
alert(str.trim())
```
* For a complete reference, go to w3schools [Complete JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)

### Numbers
* JavaScript Numbers are Always 64-bit Floating Point.
* JavaScript will try to convert strings to numbers in all numeric operations. Except for + operator, it will be used for concatination.
* `NaN` is a JavaScript reserved word indicating that a number is not a legal number.
* You can use the global JavaScript function `isNaN()` to find out if a value is a number.
* If you use `NaN` in a mathematical operation, the result will also be `NaN`. (Or the result might be a concatenation `NaN5`).
* `NaN` is a `number` i.e. `typeof NaN` returns `number`.
* `Infinity` (or `-Infinity`) is the value JavaScript will return if you calculate a number outside the largest possible number.
* Division by 0 (zero) also generates `Infinity`.
* `Infinity` is a `number` i.e. `typeof Infinity` returns `number`.
* JavaScript interprets numeric constants as hexadecimal if they are preceded by **0x**.
* Never write a number with a leading zero (like 07). Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
* you can use the `toString()` method to output numbers from base 2 to base 36.

### Arrays
* JavaScript variables can be objects. Arrays are special kinds of objects. Because of this, you can have variables of different types in the same Array. You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
* The new keyword only complicates the code. It can also produce some unexpected results:
```javascript
var points = new Array();     // Bad
var points = [];              // Good 

var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10];          // Good 

var points = new Array(40, 100);  // Creates an array with two elements (40 and 100)
var points = new Array(40);  // Creates an array with 40 undefined elements !!!!!
```

* Looping using foreach:
```javascript
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(myFunction);

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```

* Apending to the array
```
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Lemon");    // adds a new element (Lemon) to fruits 
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits
```

* Adding elements with high indexes can create `undefined` "holes" in an array.
* If you use named indexes, JavaScript will redefine the array to a standard object. After that, some array methods and properties will produce incorrect results.
* Arrays are a special kind of objects, with numbered indexes.
* You should use objects when you want the element names to be strings (text). You should use arrays when you want the element names to be numbers.
* How to Recognize an Array if `typeof` returns `object` 
  - To solve this problem ECMAScript 5 defines a new method `Array.isArray()`: `Array.isArray(fruits);   // returns true`
  - For older browser, you can create your own `isArray()` function as follow: 
  ```javascript 
  function isArray(x) {
  return x.constructor.toString().indexOf("Array") > -1;
  } 
  ``` 
  - The `instanceof` operator returns true if an object is created by a given constructor: `fruits instanceof Array;   // returns true `.
