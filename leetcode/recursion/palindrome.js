function palindrome(str){
    if(str === ""){
        return true
    }
    else if(str[0]!==str[str.length-1]){
         return false
    }
    else{
          return palindrome(str.substr(1,str.length-2))
    }
}

console.log(palindrome("malayalam"))
