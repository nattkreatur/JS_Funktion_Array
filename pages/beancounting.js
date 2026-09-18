//First function. Counting B's

function countBs(bString){
    //counter for B's
    let nrB = 0; 
    //length of input string
    let stringLength = bString.length
    for(i in bString){
        if (bString[i]==="B")
            ++nrB;
    }
    console.log("The number of uppercase B's in '" + bString + "' are: " + nrB);
}
countBs("Bob the Baboon");

//Second function. countChar

function countChar(inputString, char){
    //counter for B's
    let nrN = 0; 
    //length of input string
    let stringLength = inputString.length
    for(i in inputString){
        if (inputString[i]===char)
            ++nrN;
    }
    //error handling for upper or lower case chars
    if(char === char.toUpperCase())
        console.log("The number of uppercase " + char + "'s in '" + inputString + "' are: " + nrN);
    else
        console.log("The number of lowercase " + char + "'s in '" + inputString + "' are: " + nrN);
}

countChar("Bob the Baboon", "o");

//Third function. Implement countChar into countB's.

function countTheBs(inputString){
    countChar(inputString, "B");
}
countTheBs("Bob the Baboon");