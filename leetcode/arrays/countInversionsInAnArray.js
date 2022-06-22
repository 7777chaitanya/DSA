// inversion count indicates how far an array is from being sorted

var countInversionsInAnArray = function(arr){
    let i = 0;
    let inversionCount = 0;
    while(i < arr.length-1){
        for(let j = i+1;j<arr.length;j++){
             if(arr[j] < arr[i]){
                 inversionCount++;
             }
        }
        i++;
    }
    console.log("INVERSION COUNT =>", inversionCount)
}

countInversionsInAnArray([1,2,3,4,5])

// Time complexity => O(n^2)
// => this can be improved to O(n * log n) by using merge sort approach

// Space complexity => O(1)