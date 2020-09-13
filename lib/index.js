import {
    choose,
    iRandom,
    iRandomRange,
    random,
    randomArray,
    randomRange
} from "./randoms";

exports.choose = choose;
exports.iRandom = iRandom;
exports.iRandomRange = iRandomRange
exports.random = random;
exports.randomArray = randomArray;
exports.randomRange = randomRange;

import {
    generateCustom,
    generateKey,
    generateLetters,
    generateNumber
} from "./generateKey";

exports.generateCustom = generateCustom;
exports.generateKey = generateKey;
exports.generateLetters = generateLetters;
exports.generateNumber = generateNumber;

import {
    clamp
} from "./misc"

exports.clamp = clamp;