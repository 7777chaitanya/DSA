function fractionalKnapsack(W, arr, n);
{
  // code here
  arr.sort((x, y) => y.value / y.weight - x.value / x.weight);
  let currWeight = 0,
    currVal = 0;
  for (let i = 0; i < n; i++) {
    if (currWeight + arr[i].weight <= W) {
      currVal += arr[i].value;
      currWeight += arr[i].weight;
    } else {
      currVal += (W - currWeight) * (arr[i].value / arr[i].weight);
      break;
    }
  }

  return currVal;
}

//test data

// const W = 50
// n = 3
// values = [60,100,120]
// weight = [10,20,30]

// SC => onabort(1)

// TC => O(N *logN)
// sorting the array using merge sort takes O(N * log N)
// Iterating the array to select the requried items takes O(N)
