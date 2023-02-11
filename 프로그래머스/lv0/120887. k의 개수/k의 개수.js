function solution(i, j, k) {
    let answer = 0;
    for(let n=i;n<=j;n++){
    if(String(n).length>1){
        for(let s in String(n)){
            if(String(n)[s].includes(String(k))){
                answer++
            }
        }
    }else{
        if(String(n).includes(String(k))){
            answer++
        }
    }   
    }
    return answer;
}