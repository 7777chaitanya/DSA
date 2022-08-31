let str = "aabb";
let ans = [];
function partitions(str) {
  for (let k = 1; k <= str.length; k++) {
    let sub = [];
    for (let j = 0; j <= str.length - k; j++) {
      for (let i = 0; i < str.length; ) {
        if (i === j) {
          sub.push(str.substring(i, i + k));
          i += k;
        } else {
          sub.push(str.substring(i, i + 1));
          i++
        }
      }
      ans.push([...sub]);
    }
  }
}

partitions(str);
console.log(ans);


