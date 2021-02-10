# learn-JS
- [ ] dsfdsdfsd
- [x] cvvcvcxv
- [ ] dsfdsdfsd
- [ ] dsfdsdfsd

* Placing scripts at the bottom of the <body> element improves the display speed, because script interpretation slows down the display.
* The script will behave as if it was located exactly where the <script> tag is located.
* If you re-declare a JavaScript variable, it will not lose its value.
* If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
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
* JavaScript `const` variables must be assigned a value when they are declared
