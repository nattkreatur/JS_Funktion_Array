//First program. Creates a new reversed array.

function reverseArray(array){
    let newArray = [];
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++){
        newArray.unshift(array[i]);
    }
    return newArray;
}

//input enligt uppgift
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));

//Second program. Reverses an existing array.

function reverseArrayInPlace(array){
    let arrayLength = array.length;
    let temporary = []; //placeholder array used only to reverse order inside of function
    for (let i = 0; i < arrayLength; i++){
        temporary.unshift(array[i]);
    }
    arrayValue = temporary; //changes existing array instead of returning a new array
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
