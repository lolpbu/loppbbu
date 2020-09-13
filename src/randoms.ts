/**
 * returns a random value from the arguments
 * @param ... values
 * @example let value = choose(4, false, "lol");
 */
export function choose():any{
    let values:any[] = [];
    for(let i in arguments){
        values[i] = arguments[i];
    }
    const random_value = values[Math.floor(Math.random() * values.length)];
    return random_value;
}

/**
 * returns a random number between 0 and n
 * @param n number
 */
export function random(n:number):number{
    return Math.random() * n;
}

/**
 * returns a random number between n1 and n2
 * @param n1 min value
 * @param n2 max value
 */
export function randomRange(n1:number, n2:number):number{
    return Math.random() * (n2 - n1) + n1;
}

/**
 * returns a random integer between 0 and n
 * @param n number
 */
export function iRandom(n:number):number{
    return Math.floor(Math.random() * n);
}

/**
 * returns a random integer between n1 and n2
 * @param n1 min value
 * @param n2 max value
 */
export function iRandomRange(n1:number, n2:number):number{
    return Math.floor(Math.random() * (n2 - n1) + n1);
}

/**
 * returns a random number of an array arr
 * @param arr array
 */
export function randomArray(arr:any[]):any {
    return arr[Math.floor(Math.random() * arr.length)];
}