System.register("generateKey", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function generateKey(l) {
        var res = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var cc = chars.length;
        for (var i = 0; i < l; i++) {
            res += chars.charAt(Math.floor(Math.random() * cc));
        }
        return res;
    }
    exports_1("generateKey", generateKey);
    function generateLetters(l) {
        var res = "";
        var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var cc = chars.length;
        for (var i = 0; i < l; i++) {
            res += chars.charAt(Math.floor(Math.random() * cc));
        }
        return res;
    }
    exports_1("generateLetters", generateLetters);
    function generateNumber(l) {
        var res = "";
        var chars = "0123456789";
        var cc = chars.length;
        for (var i = 0; i < l; i++) {
            res += chars.charAt(Math.floor(Math.random() * cc));
        }
        return res;
    }
    exports_1("generateNumber", generateNumber);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("misc", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function clamp(n, min, max) {
        if (n < min)
            return min;
        if (n > max)
            return max;
        return n;
    }
    exports_2("clamp", clamp);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("randoms", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    function choose() {
        var values = [];
        for (var i in arguments) {
            values[i] = arguments[i];
        }
        var random_value = values[Math.floor(Math.random() * values.length)];
        return random_value;
    }
    exports_3("choose", choose);
    function random(n) {
        return Math.random() * n;
    }
    exports_3("random", random);
    function randomRange(n1, n2) {
        return Math.random() * (n2 - n1 + 1) + n1;
    }
    exports_3("randomRange", randomRange);
    function iRandom(n) {
        return Math.floor(Math.random() * n);
    }
    exports_3("iRandom", iRandom);
    function iRandomRange(n1, n2) {
        return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
    }
    exports_3("iRandomRange", iRandomRange);
    function randomArray(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    exports_3("randomArray", randomArray);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map