setTimeout(function () {
    console.log('I waited 2 sec');
}, 2000);

let counter = 0;
function timeout() {
    setTimeout(function () {
        console.log(++counter);
        timeout();
    }, 1000);
}

timeout();

// IIFE -Immediately Invoked Function Expression
(function () {
    console.log('hi');

})();