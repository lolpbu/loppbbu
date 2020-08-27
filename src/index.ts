//#region RANDOMS

export function choose():any{
    let values:any[] = [];
    for(let i in arguments){
        values[i] = arguments[i];
    }
    const random_value = values[Math.floor(Math.random() * values.length)];
    return random_value;
}

export function random(n:number):number{
    return Math.random() * n;
}

export function randomRange(n1:number, n2:number):number{
    return Math.random() * (n2-n1 + 1) + n1;
}

export function iRandom(n:number):number{
    return Math.floor(Math.random() * n);
}

export function iRandomRange(n1:number, n2:number):number{
    return Math.floor(Math.random() * (n2-n1 + 1) + n1);
}

export function randomArray(arr:any[]):any {
    return arr[Math.floor(Math.random() * arr.length)];
}

//#endregion

//#region GENERATE KEYS

export function generateKey(l:number):string{
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const cc = chars.length;
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * cc));
    }
    return res;
}

export function generateLetters(l:number):string{
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const cc = chars.length;
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * cc));
    }
    return res;
}

export function generateNumber(l:number):string{
    let res = "";
    const chars = "0123456789";
    const cc = chars.length;
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * cc));
    }
    return res;
}

//#endregion

//#region MISC

export function clamp(n:number, min:number, max:number):number{
    if(n < min) return min;
    if(n > max) return max;
    return n;
}

//#endregion
