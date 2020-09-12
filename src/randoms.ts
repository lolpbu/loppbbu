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