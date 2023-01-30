function solution(n) {
    var answer = 0;
    let arrNum=[];
    for(let i=1;i<=n;i++){
        if(n%i===0){
            arrNum.push(i)
        }
    }
    return arrNum.length;
}