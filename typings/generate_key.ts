export function generateKey(l:number):string {
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}

export function generateLetters(l:number):string {
    let res = "";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}

export function generateNumbers(l:number):string {
    let res = "";
    const chars = "0123456789";
    for(let i=0; i<l; i++){
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}