export function choose():any {
    let values:any[] = [];
    for(let i in arguments){
        values[i] = arguments[i];
    }
    const random_value:any = values[Math.floor(Math.random() * values.length)];
    return random_value;
}

export function random(n:number):number {
    return Math.random() * n;
}

export function randomRange(min:number, max:number):number {
    return Math.random() * (max - min) + min;
}

export function iRandom(n:number):number {
    return Math.floor(Math.random() * n);
}

export function iRandomRange(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min) + min);
}

export function randomArray(arr:any[]):any {
    return arr[Math.floor(Math.random() * arr.length)];
}