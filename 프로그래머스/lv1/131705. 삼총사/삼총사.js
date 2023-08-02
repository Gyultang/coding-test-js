function solution(num) {
    var answer = 0;
    for(let i =0;i<num.length;i++){
        for(let j=0;j<num.length;j++){
            for(let k=0;k<num.length;k++){
                if(i!==j&&j!==k&&i!==k){
                     if((num[i] + num[j] + num[k])===0)
                    answer += ((num[i] + num[j] + num[k])===0)
                }
            }
        }
    }
    return answer/6;
}
