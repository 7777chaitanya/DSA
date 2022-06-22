function repeatingAndMissingNumbers(arr){
    arr.sort((x,y) => x-y);
    console.log("sortedArray =>", arr)

    let n = arr.length;
    let i = 1;
    let repeatingNumber;
    while(i < n){
        if(arr[i] === arr[i-1]){
            repeatingNumber = arr[i]
        }
        i++;
    }
}

console.log(repeatingAndMissingNumbers([3,1,2,5,4,6,7,5]))