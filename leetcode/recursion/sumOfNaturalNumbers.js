function sumOfNaturalNumbers(number, sum){
    if(number === 1) return number;
    else{
        
        return number+sumOfNaturalNumbers(number-1)
    }
}
const ans = sumOfNaturalNumbers(10,0)
console.log(ans)