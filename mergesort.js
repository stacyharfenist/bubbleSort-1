function split (wholeArray) {
    let midpoint = Math.ceil((wholeArray.length-1)/2);
    console.log([wholeArray.slice(0,midpoint),wholeArray.slice(midpoint)])
    return [wholeArray.slice(0,midpoint),wholeArray.slice(midpoint)]
}

function merge(anArr) {
    //anArr will always only have two elements, each of which is an array
    let arrayOne = anArr[0];
    let arrayTwo = anArr[1];
    let returnArray = [];
    while (arrayOne.length || arrayTwo.length) {
        if(arrayOne[0] < arrayTwo[0] || arrayTwo[0] === undefined) {
            returnArray.push(arrayOne[0]);
            arrayOne.shift();
        }  else if (arrayTwo[0]<arrayOne[0] || arrayOne[0]===undefined) {
            returnArray.push(arrayTwo[0]);
            arrayTwo.shift();
        } else if (arrayOne[0]===arrayTwo[0]) {
            returnArray.push(arrayTwo[0]);
            arrayTwo.shift();
        }
    } 
    return returnArray; 
}    


//mergesort :: takes in an [a] => [a]
function mergeSort(anArr) {
    if (anArr.length <=1) {
        return anArr;
    } 

    let splitArray = split(anArr)
    let leftHalfSorted = mergeSort(splitArray[0])
    let rightHalfSorted = mergeSort(splitArray[1])

    return merge([leftHalfSorted, rightHalfSorted])
    //we get an array [4,3,2,1]
    //[9,8,7,6,5,4,3,2,1] => [[9,8,7,6],[5,4,3,2,1]]
    //we want to split it, so we run it through the split function, and get [[4,3], [2,1]]
    //if array[0].length > 1, run split again ---but we can't foget about array[1]
    //[[4],[3]]
    //then we start merging it back together

    
}

