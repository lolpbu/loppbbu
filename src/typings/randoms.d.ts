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
 * @param min min value
 * @param max max value
 */
export declare function randomRange(min: number, max: number): number;

/**
 * returns a random integer between 0 and n
 * @param n value
 */
export declare function iRandom(n: number): number;

/**
 * returns a random integer between n1 and n2
 * @param min min value
 * @param max max value
 */
export declare function iRandomRange(min: number, max: number): number;

/**
 * returns a random element of an array arr
 * @param arr the array
 */
export declare function randomArray(arr: any[]): any;