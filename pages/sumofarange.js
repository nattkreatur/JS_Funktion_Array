function range(start, end){
    firstValue = start;
    rangeList = [];
    rangeSize = 1 + end - start; //addera 1 för att inkludera även första och sista numret

    for (let i = 0; i < rangeSize; i++){
        rangeList.unshift(firstValue);
        firstValue++;
    }
    
    //debug-logg:
    console.log("Returnerar antal värden i array: " + rangeSize);
    return [rangeList];
}

console.log(range(5, 10));
//skapa en tom array []
//for loopa-värdena på något vis