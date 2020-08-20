# ????????????

some functions that i find useful lol

# installation

`npm install loppbbu --save`

# functions

## randoms

* **choose** - returns a random value from the parameters
    * `choose(...values:any):any`
* **random** - returns a random number between 0 and *n*
    * `random(n:number):number`
* **randomRange** - returns a random number between *n1* and *n2*
    * `randomRange(n1:number, n2:number):number`
* **iRandom** - returns a random integer between 0 and *n*
    * `iRandom(n:number):number`
* **iRandomRange** - returns a random integer between *n1* and *n2*
    * `iRandomRange(n1:number, n2:number):number`

## key generators

* **generateKey** - returns a random string of uppercase and lowercase letters and numbers with a length *l*
    * `generateKey(l:number):string`
* **generateLetters** - returns a random string of uppercase and lowercase letters with a length  *l*
    * `generateLetters(l:number):string`
* **generateNumber** - returns a random string of numbers with a length *l*
    * `generateNumber(l:number):string`

## misc

* **clamp** - returns *min* when `(n < min)`, *max* when `(max > n)`, *n* otherwise
    * `clamp(n:number, min:number, max:number):number`

# that's it

.