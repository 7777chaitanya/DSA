function combinations(ans, ds, arr, r, j, sumArray, sum) {
  for (let i = j; i < arr.length; i++) {
    ds.push(arr[i]);
    sum += arr[i];
    if (ds.length === r || r === null) {
      ans.push([...ds]);
      sumArray.push(sum);
    }
    if (i < arr.length - 1) {
      combinations(ans, ds, arr, r, i + 1, sumArray, sum);
    }
    ds.pop();
    sum -= arr[i];
  }
}

function main() {
  let ans = [];
  let arr = [5, 2, 1];
  let ds = [];
  let sum = 0;
  let sumArray = [];
  let r = null;
  combinations(ans, ds, arr, r, 0, sumArray, sum);
  if (r === 0 || r === null) {
    ans.push([]);
    sumArray.push(0);
  }
  sumArray.sort((x, y) => x - y);
  console.log(sumArray);
}
main();
