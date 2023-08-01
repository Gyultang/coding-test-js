function solution(n) {
    var answer = 0;
    const n1 = countOne(n);
    for(i=n+1;!answer;i++){
        const i2=countOne(i);
        if(i2===n1){
            answer=i
        }
    }
    
    function countOne(num){
        //이진수값의 1개수
        return num.toString(2).split('0').join('').length
    }
    
    return answer;
}