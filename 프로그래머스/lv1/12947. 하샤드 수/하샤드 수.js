function solution(x) {
    var answer = true;
    let arrNum = String(x).split("")
    let num = 0;
    for(let i =0;i<arrNum.length;i++){
       num += Number(arrNum[i])
        if(x%num===0){
        answer=true;
        }else{
         answer=false;
        }
    }
    return answer;
}