/*
* https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch
*
* tl;dr: No! Arrow functions and function declarations/expressions are not equivalent and cannot be replaced blindly.
* If the function you want to replace does not use this, arguments and is not called with new, then yes
*
*
*
* */

let func1 = () => {
    console.log('Hello Arrow');
};

func1();