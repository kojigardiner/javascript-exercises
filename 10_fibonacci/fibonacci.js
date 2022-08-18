const fibonacci = function (a) {
    if (a < 1) return "OOPS";
    let idx = +a;

    if (idx == 1) return 1;
    if (idx == 2) return 1;

    return fibonacci(idx - 1) + fibonacci(idx - 2);
};

// Do not edit below this line
module.exports = fibonacci;
