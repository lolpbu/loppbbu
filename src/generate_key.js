"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNumbers = exports.generateLetters = exports.generateKey = void 0;
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
function generateNumbers(l) {
    var res = "";
    var chars = "0123456789";
    for (var i = 0; i < l; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}
exports.generateNumbers = generateNumbers;
