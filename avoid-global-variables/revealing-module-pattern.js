// sometimes they call it module pattern
// https://yuiblog.com/blog/2007/06/12/module-pattern/
let counter = (function () {
    let count = 0;

    function getCountValue() { return count; }

    function setCountValue(value) { count = value; }

    function resetCountValue() { setCountValue(0); }
    function incrementCountValue() {
        let nextValue = getCountValue() + 1;
        setCountValue(nextValue);
    }

    return {
        get: getCountValue,
        increment: incrementCountValue,
        reset: resetCountValue
    }
})();


console.log(counter.get());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());
counter.reset();
counter.increment();
counter.increment();
console.log(counter.get());

