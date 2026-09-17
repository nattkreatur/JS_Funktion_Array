function isEven(nr){
    if(nr == 1 || nr == 0){
        return nr == 0;
    } else if (nr < 0){
        return isEven(nr * nr) //this fixes the problem with negative numbers returning uncaught error
    } else{
        return isEven(nr = nr - 2)
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-8));
//console.log(isEven(0));