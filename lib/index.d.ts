//#region randoms

/**
 * returns a random value from the parametes
 * @param ... values
 * @example let value = choose(4, false, "lol");
 */
export declare function choose(): any;

/**
 * returns a random number number between 0 and n
 * @param n the value
 */
export declare function random(n: number): number;

/**
 * returns a random number between n1 and n2
 * @param n1 min value
 * @param n2 max value
 */
export declare function randomRange(n1: number, n2: number): number;

/**
 * returns a random integer between 0 and n
 * @param n the value
 */
export declare function iRandom(n: number): number;

/**
 * returns a random integer between n1 and n2
 * @param n1 min value
 * @param n2 max value
 */
export declare function iRandomRange(n1: number, n2: number): number;

/**
 * returns a random element of an array arr
 * @param arr the array
 */
export declare function randomArray(arr: any[]): any;

//#endregion

//#region generate key

/**
 * returns a random string of uppercase and lowercase letters and number with a length l
 * @param l the string's length
 */
export declare function generateKey(l: number): string;

/**
 * returns a random string of uppercase and lowercase letters with a length l
 * @param l the string's length
 */
export declare function generateLetters(l: number): string;

/**
 * returns a random string of numbers with a length l
 * @param l the string's length
 */
export declare function generateNumber(l: number): string;

/**
 * return a random string made of the content of the string str with a length l
 * @param l the string's length
 * @param str the string
 */
export declare function generateCustom(l: number, str: string): string;

//#endregion

//#region misc

/**
 * returns min when (n < min), max when("max > n"), n otherwise
 * @param n the value
 * @param min min value
 * @param max max value
 * @example this.x = clamp(this.x, -50, 50); // this.x will always be in range of -50 and 50
 */
export declare function clamp(n: number, min: number, max: number): number;

//#endregion
