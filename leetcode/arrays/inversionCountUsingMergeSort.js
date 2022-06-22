let count = 0;

function merge(L, R, arr) {
  let i = 0,
    j = 0,
    k = 0;
  let l = L.length;
  let r = R.length;
  let len = arr.length;
  while (i < l && j < r) {
    if (L[i] > R[j]) {
      arr[k] = R[j];
      j++;
      k++;
      count += l - i;
    } else {
      arr[k] = L[i];
      i++;
      k++;
    }
  }
  while (i < l) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < r) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function inversionCountUsingMergeSort(arr) {
  if (arr.length < 2) return;
  let len = arr.length;
  let mid = Math.ceil(len / 2);
  const L = arr.slice(0, mid);
  const R = arr.slice(mid, len);
  inversionCountUsingMergeSort(L);
  inversionCountUsingMergeSort(R);
  merge(L, R, arr);
}

(function main() {
  inversionCountUsingMergeSort([5, 4, 3, 1, 2]);
  console.log("INVERSION COUNT =>", count);
})();


// TIME COMPLEXITY => O(n * log n)

