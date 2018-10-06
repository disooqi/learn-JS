// sometimes they call it module pattern
// https://yuiblog.com/blog/2007/06/12/module-pattern/
let counter = (function () {
    let count = 0;
    let setCountValue = function (value) {
        count = value;
    };

    return {
        // you can't use countValue: count because you accidentally make a clouser and with a new copy of count?????
        getCountValue: function () {
            return count;
        },

        reset: function () {
            setCountValue(0);
        },
        incrementCountValue: function () {
            let nextValue = this.getCountValue() + 1;
            setCountValue(nextValue);
        }
    }
})();


console.log(counter.getCountValue());
counter.incrementCountValue();
counter.incrementCountValue();
counter.incrementCountValue();
console.log(counter.getCountValue());
counter.reset();
counter.incrementCountValue();
counter.incrementCountValue();
console.log(counter.getCountValue());

