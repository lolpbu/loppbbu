//#region RANDOMS

/**
 * returns a random value from the arguments
 * @param ... values
 * @example let random_value = choose(4, false, "lol");
 */
export declare function choose(): any;

/**
 * returns a random number between 0 and n
 * @param n value
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
 * @param n value
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

//#region GENERATE KEYS

/**
 * returns a random string of uppercase and lowercase letters and numbers
 * @param l the string's length
 */
export declare function generateKey(l: number): string;

/**
 * returns a random string of uppercase and lowercase letters
 * @param l the string's length
 */
export declare function generateLetters(l: number): string;

/**
 * returns a random string of numbers
 * @param l the string's length
 */
export declare function generateNumber(l: number): string;

//#endregion

//#region MISC

/**
 * returns min when (n < min), max when (max > n), n otherwise
 * @param n value to clamp
 * @param min min value
 * @param max max value
 * @example this.x = clamp(this.x, -50, 50) // this.x will always be in range of -50 and 50
 */
export declare function clamp(n: number, min: number, max: number): number;

//#endregion
