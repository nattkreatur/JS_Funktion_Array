//First program. A range-function:

function range(start, end){
    let rangeList = [];
    let rangeSize = end - start;

    for (let i = 0; i <= rangeSize; i++){
        rangeList.push(start);
        start++;
    }
    return rangeList;
}
console.log(range(1, 10));
console.log(range(5, 8));

//Second program. A sum function:

function sum(array){
    let arraySize = array.length;
    let valueOfArray = 0;
    for (let i = 0; i < arraySize; i++){
        valueOfArray += array[i]; //i goes through every index of array
    }
    return valueOfArray;
}

console.log(sum(range(1, 10)));
console.log(sum(range(5, 8)));