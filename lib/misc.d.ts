/**
 * returns min when (n < min), max when (max > n), n otherwise
 * @param n value to clamp
 * @param min min value
 * @param max max value
 * @example this.x = clamp(this.x, -50, 50) // this.x will always be in range of -50 and 50
 */
export declare function clamp(n: number, min: number, max: number): number;
