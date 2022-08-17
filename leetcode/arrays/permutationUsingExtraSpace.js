function recurPerm(ans, ds, attendance, data) {
    if(ds.length === data.length){
        ans.push(ds);
        return
    }
    else{
        for(let i = 0;i<data.length;i++){
            if(!attendance[i]){
                ds.push(data[i]);
                attendance[i] = true;
                recurPerm(ans, ds, attendance, data)
                attendance[i] = false;
                ds.pop(data[i])
            }
        }
    }
}

function permutations(data) {
  // answer array to store the answer permutations
  let ans = []; // array of arrays

  let ds = []; // this array stores the current permutations

  let attendance = new Array(data.length); // this array helps us to verify if an element is picked or not

  recurPerm(ans, ds, attendance, data);
  return ans;
}

permutations([1, 2, 3]);
