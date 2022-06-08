const arr1 = [1, 4, 6, 7, 8, 10, 78];
const arr2 = [1, 2, 3, 9];

function mergeTwoSortedArrayWithoutExtraSpace(arr1, arr2) {
  let j = 0;
  while (true) {
    let i = 0;
    let flag = true;
    while (i < arr1.length) {
      if (arr1[i] > arr2[j]) {
        const temp = arr2[j];
        arr2[j] = arr1[i];
        arr1[i] = temp;
        flag = false;
      }
      i = i + 1;
    }
    if (flag) {
      break;
    }
    j = j + 1;
  }
  arr2.sort((x, y) => x - y);
  console.log(arr1, arr2);
}

mergeTwoSortedArrayWithoutExtraSpace(arr1, arr2);
