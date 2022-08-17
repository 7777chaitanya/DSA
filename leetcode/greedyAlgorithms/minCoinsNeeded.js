/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function findSum(numbers, coins, a) {
  let allAreZeroExceptLast = 0;
  let isSumMatching = true;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += coins[i] * numbers[i];
    if (numbers[i] !== 0 && i > 0) {
      allAreZeroExceptLast += 1;
    }
  }
  if (sum !== a) {
    isSumMatching = false;
  }
  return {
    allAreZeroExceptLast: allAreZeroExceptLast === 0 ? true : false,
    sum,
    isSumMatching,
  };
}

//working fine
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
}

var count = 0;
var coinChange = function (coins, a) {
  console.log("started");
  coins.sort((x, y) => x - y);
  let amount = a;
  //creating the first numbers array
  let numbers = new Array(coins.length);
  console.log(numbers);
  for (let i = coins.length - 1; i >= 0; i--) {
    numbers[i] = Math.floor(amount / coins[i]);
    amount = amount % coins[i];
  }

  while (true) {
    console.log("NUMBERS =>", numbers);
    // count++;
    // if(count === 50){
    //   return "hello"
    // }
    const {
      allAreZeroExceptLast,
      sum: summy,
      isSumMatching,
    } = findSum(numbers, coins, a);
    let sum = summy;
    if (isSumMatching) {
      return sumOfArray(numbers);
    } else if (allAreZeroExceptLast === true) {
      return -1;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
          continue;
        } else {
          numbers[i] -= 1;
          console.log("sum", { a, sum, iVaL: coins[i] });
          sum = a - sum - coins[i];
          if (sum < 0) {
            break;
          }
          for (let j = i - 1; j >= 0; j--) {
            numbers[j] = Math.floor(sum / coins[j]);
            sum = sum % coins[j];
          }
          break;
        }
      }
    }
  }
};

let answer = coinChange([83, 186, 408, 419], 6249);
console.log("answer =>", answer);
