/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
    let ans = [];
    let path = [];
    const checkIfIInPath = (path , element) => {
        let flag = false
        for(let i = 0 ; i < path.length; i++){
            if(path[i] === element){
                flag = true
            }
        }
        return flag;
    }
    
    const permutations = (path) => {
        if(ans.length >= k){
            return
        }
        else if(path.length === n){
            ans.push([...path])
        }
        else{
            for(let i = 1;i<=n;i++){
                if(ans.length ===  k){
                    break;
                }
                if(checkIfIInPath(path , i)){
                    continue
                }
                path.push(i)
                permutations(path)
                path.pop()
            }
        }
    }
    permutations(path);
    return ans[k-1].join('');
};