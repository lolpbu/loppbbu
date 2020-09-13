"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCustom = exports.generateNumber = exports.generateLetters = exports.generateKey = void 0;
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
    if (!str || !str.length) {
        throw new TypeError("str in generateCustom cannot be empty bruh");
    }
    for (var i = 0; i < l; i++) {
        res += str.charAt(Math.floor(Math.random() * str.length));
    }
}
exports.generateCustom = generateCustom;
