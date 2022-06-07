//find the 20th fibonacci number
let initialTime = new Date();

let memoryArray = new Array(20);
function fib(n) {
  if (n <= 1) {
    return n;
  }
  if (!memoryArray[n - 1]) {
    memoryArray[n - 1] = fib(n - 1);
  }
  if (!memoryArray[n - 2]) {
    memoryArray[n - 2] = fib(n - 2);
  }
  return memoryArray[n - 1] + memoryArray[n - 2];
}

function fib2(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib2(n - 1) + fib2(n - 2);
  }
}

function main() {
  console.log(fib2(40));
  let finalTime = new Date();
  console.log("Time taken => ", `${finalTime - initialTime} milli secs`);
}

main();
