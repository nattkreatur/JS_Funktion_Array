//First program. Creates a new reversed array.

function reverseArray(array){
    let newArray = [];
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++){
        newArray.unshift(array[i]);
    }
    return newArray;
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));


//Second program. Reverses an existing array.
function reverseArrayInPlace(array){
    let arrayLength = array.length;
    let j = arrayLength;//for countdown
    for (let i = 0; i < arrayLength; i++){ //for count up
        j > 0; j--;
        let temp = array[i];
        let temp2 = array[j];
        //only implement changes if upcount is smaller than downcount
        if (i < j){
            array[i] = temp2;
            array[j] = temp;
        } 
    }
    return array;
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
