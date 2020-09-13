"use strict";
//#region randoms
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = exports.generateCustom = exports.generateNumber = exports.generateLetters = exports.generateKey = exports.randomArray = exports.iRandomRange = exports.iRandom = exports.randomRange = exports.random = exports.choose = void 0;
function choose() {
    var value = arguments[Math.floor(Math.random() * arguments.length)];
    return value;
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
    return arr[Math.random() * arr.length];
}
exports.randomArray = randomArray;
//#endregion
//#region generateKey
function generateKey(l) {
    var res = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < l; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}
exports.generateKey = generateKey;
function generateLetters(l) {
    var res = "";
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < l; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}
exports.generateLetters = generateLetters;
function generateNumber(l) {
    var res = "";
    var chars = "0123456789";
    for (var i = 0; i < l; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}
exports.generateNumber = generateNumber;
function generateCustom(l, str) {
    var res = "";
    for (var i = 0; i < l; i++) {
        res += str.charAt(Math.floor(Math.random() * str.length));
    }
    return res;
}
exports.generateCustom = generateCustom;
//#endregion
//#region misc
function clamp(n, min, max) {
    if (n < min)
        return min;
    if (n > max)
        return max;
    return n;
}
exports.clamp = clamp;
