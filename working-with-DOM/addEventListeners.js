(function () {
    function runSayHiOnClick(msgText) {
        alert(msgText);
    }

    let myButton = document.getElementById('sayHi');
    myButton.addEventListener('click', function () { runSayHiOnClick('Hello there'); });
})();