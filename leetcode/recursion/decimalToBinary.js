function decimalToBinary(number, str) {
  if (number === 0) {
    return str;
  } else {
    str = (number % 2) + str;
    return decimalToBinary(Math.floor(number / 2), str);
  }
}

console.log(decimalToBinary(233, ""));
