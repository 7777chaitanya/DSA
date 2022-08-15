areMeetingsOverlapping(m1, m2){
    let overlapCount = 0;
    for(let i = m1.start;i<=m1.end;i++){
        for(let j = m2.start;j<=m2.end;j++){
            if(i === j){
                overlapCount++;
            }
        }
        if(overlapCount > 1){
           return true;
        }
    }
    return false;
}



maxMeetings(start, end, n)
{
    let meetingDetails = []

    // TC => O(n)
    for(let i = 0;i<n;i++){
        let obj = {};
        obj.start = start[i];
        obj.end = end[i];
        obj.duration = end[i] - start[i]
        obj.meetingNumber = i+1;
        meetingDetails.push(obj)
    }

    // TC => O(n^2)
    meetingDetails.sort((x,y) => x.duration-y.duration);
    let op = [];
    op.push(meetingDetails[0])

    // O(n^3)
    for(let i=1;i<n;i++){
        let overlap = false
        for(let j = 0;j<op.length;j++){
            overlap = this.areMeetingsOverlapping(op[j], meetingDetails[i])
            if(overlap){
                break;
            }
        }
        if(!overlap){
            op.push(meetingDetails[i])
        }
    }
    console.log(op)
    return op.length;
}


let start = [1,3,0,5,8,5]
let end = [2,4,6,7,9,9]
let n = 6
maxMeetings(start, end, n)