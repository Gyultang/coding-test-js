function solution(arr, divisor) {
    var res = [];
    for(e of arr){
        if(e%divisor===0){
            res.push(e)
            res.sort((a,b)=>a-b)
        }
    }
    if(res.length===0){
        res.push(-1)
    }
    return res;
}