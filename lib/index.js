"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loppbbu = void 0;
var loppbbu;
(function (loppbbu) {
    function choose() {
        var value = arguments[Math.floor(Math.random() * arguments.length)];
        return value;
    }
    loppbbu.choose = choose;
    function random(n) {
        return Math.random() * n;
    }
    loppbbu.random = random;
    function randomRange(n1, n2) {
        return Math.random() * (n2 - n1) + n1;
    }
    loppbbu.randomRange = randomRange;
    function iRandom(n) {
        return Math.floor(Math.random() * n);
    }
    loppbbu.iRandom = iRandom;
    function iRandomRange(n1, n2) {
        return Math.floor(Math.random() * (n2 - n1) + n1);
    }
    loppbbu.iRandomRange = iRandomRange;
    function randomArray(arr) {
        return arr[Math.random() * arr.length];
    }
    loppbbu.randomArray = randomArray;
    function generateKey(l) {
        var res = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < l; i++) {
            res += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return res;
    }
    loppbbu.generateKey = generateKey;
    function generateLetters(l) {
        var res = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < l; i++) {
            res += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return res;
    }
    loppbbu.generateLetters = generateLetters;
    function generateNumber(l) {
        var res = "";
        var chars = "0123456789";
        for (var i = 0; i < l; i++) {
            res += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return res;
    }
    loppbbu.generateNumber = generateNumber;
    function generateCustom(l, str) {
        var res = "";
        for (var i = 0; i < l; i++) {
            res += str.charAt(Math.floor(Math.random() * str.length));
        }
        return res;
    }
    loppbbu.generateCustom = generateCustom;
    function clamp(n, min, max) {
        if (n < min)
            return min;
        if (n > max)
            return max;
        return n;
    }
    loppbbu.clamp = clamp;
})(loppbbu = exports.loppbbu || (exports.loppbbu = {}));
