function solution(s) {
    var arr = s.split("");
    let res=[]
    if(s.length%2===0){
            res.push(arr[s.length/2-1])
            res.push(arr[s.length/2])
    }else{
        res.push(arr[(s.length-1)/2])
    }
    return res.join('');
}