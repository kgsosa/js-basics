/* Max of Two Numbers */
// function max(a, b) {
//     if (a > b) return a;
//     else return b;
// }

// function max(a, b) {
//     if (a > b) return a;
//     return b;
// }

// Optimized code
function max(a, b) {
    return a > b ? a : b;
}

/* Landscape or Portrait */
// function isLandscape(width, height) {
//     if (width > height) return true;
//     return false;
// }

// function isLandscape(width, height) {
//     return width > height ? true : false;
// }

// Optimized code
function isLandscape(width, height) {
    return width > height;
}

/* FizzBuzz */
// function fizzBuzz(input) {
//     if (typeof input !== "number") return "Not a number";

//     if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

//     if (input % 3 === 0) return "Fizz";

//     if (input % 5 === 0) return "Buzz";

//     return input;
// }

// Optimized code
function fizzBuzz(input) {
    if (typeof input !== "number") return NaN;

    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

    if (input % 3 === 0) return "Fizz";

    if (input % 5 === 0) return "Buzz";

    return input;
}
