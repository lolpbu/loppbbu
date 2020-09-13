export module loppbbu {

    //#region randoms

    export function choose():any{
        const value = arguments[Math.floor(Math.random() * arguments.length)];
        return value
    }

    export function random(n:number):number{
        return Math.random() * n;
    }

    export function randomRange(n1:number, n2:number):number{
        return Math.random() * (n2 - n1) + n1;
    }

    export function iRandom(n:number):number{
        return Math.floor(Math.random() * n);
    }

    export function iRandomRange(n1:number, n2:number):number{
        return Math.floor(Math.random() * (n2 - n1) + n1);
    }

    export function randomArray(arr:any[]):any{
        return arr[Math.random() * arr.length];
    }

    //#endregion

    //#region generateKey

    export function generateKey(l:number):string{
        let res = "";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i=0; i<l; i++){
            res += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return res;
    }

    export function generateLetters(l:number):string{
        let res = "";
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(let i=0; i<l; i++){
            res += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return res;
    }

    export function generateNumber(l:number):string{
        let res = "";
        const chars = "0123456789";
        for(let i=0; i<l; i++){
            res += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return res;
    }

    export function generateCustom(l:number, str:string):string {
        let res = "";
        for(let i=0; i<l; i++){
            res += str.charAt(Math.floor(Math.random() * str.length));
        }
        return res;
    }

    //#endregion

    //#region misc

    export function clamp(n:number, min:number, max:number):number{
        if(n < min) return min;
        if(n > max) return max;
        return n;
    }
}