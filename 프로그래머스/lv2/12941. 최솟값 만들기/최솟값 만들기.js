function solution(A,B){
    var res = 0;
    let aArr=A.sort((a,b)=>b-a);
    let bArr=B.sort((a,b)=>a-b);
    for(let i =0;i<bArr.length;i++){
        res=res+aArr[i]*bArr[i]
    }
    return res;
}