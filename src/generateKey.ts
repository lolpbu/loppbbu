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
