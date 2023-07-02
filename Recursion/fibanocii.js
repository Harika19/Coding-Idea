// recursion - multiple calls - first (f(n-1)) executes completely and then next (f(n-2) )


var fibanocii = function (n) {

    if (n <= 1) {
        return n;
    }
    return fibanocii(n - 1) + fibanocii(n - 2)
}

var main = function (n) {
    return fibanocii(n)
}

console.log(main(5))