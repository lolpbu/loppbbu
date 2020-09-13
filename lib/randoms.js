"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomArray = exports.iRandomRange = exports.iRandom = exports.randomRange = exports.random = exports.choose = void 0;
function choose() {
    var values = [];
    for (var i in arguments) {
        values[i] = arguments[i];
    }
    var random_value = values[Math.floor(Math.random() * values.length)];
    return random_value;
}
exports.choose = choose;
function random(n) {
    return Math.random() * n;
}
exports.random = random;
function randomRange(n1, n2) {
    return Math.random() * (n2 - n1) + n1;
}
exports.randomRange = randomRange;
function iRandom(n) {
    return Math.floor(Math.random() * n);
}
exports.iRandom = iRandom;
function iRandomRange(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1) + n1);
}
exports.iRandomRange = iRandomRange;
function randomArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
exports.randomArray = randomArray;
