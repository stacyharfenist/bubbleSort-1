//let compares = 0;
let swaps = 0;
let newCompare = 0;

function bubbleSort(array) {
    if(array.length <=1) {
        return array;
    }
    let copyArray = array.slice()
    while(copyArray.length) {
        for (let i = 0; i < copyArray.length-1;i++){
            //console.log(compare(array[i], array[i+1]), array[i])
            if (compare(array[i], array[i+1])){
                swap(array[i], array[i+1], i, array);
            }
        }
    copyArray.pop();    
    }  
    console.log(newCompare)
    console.log(swaps)
    return array   
}

function swap (elemOne, elemTwo, i/*i is the index of elemOne*/, array){
 array[i] = elemTwo;
 array[i+1] = elemOne;
 swaps++
 return array;
}

function compare(elemOne, elemTwo) {
    newCompare++
    if(elemOne > elemTwo) return true;
    else return false;
}
