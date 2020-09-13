/**
 * returns a random string of uppercase and lowercase letters and numbers
 * @param l the string's length
 */
export function generateKey(l:number):string{
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}

/**
 * returns a random string of uppercase and lowercase letters
 * @param l the string's length
 */
export function generateLetters(l:number):string{
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}

/**
 * returns a random string of numbers
 * @param l the string's length
 */
export function generateNumber(l:number):string{
    let res = "";
    const chars = "0123456789";
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}

export function generateCustom(l:number, str:string){
    let res = "";
    if(!str || !str.length){
        throw new TypeError("str in generateCustom cannot be empty bruh");
    }
    for(let i=0; i<l; i++){
        res += str.charAt(Math.floor(Math.random() * str.length));
    }
}