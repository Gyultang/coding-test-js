function solution(s) {
    let res = 0;
    let number=[];
    number=s.split(' ')
    for(let i = 0;i<number.length;i++){
        if(number[i]=="Z"){
            res-=parseInt(number[i-1])
        }else{
            res+=parseInt(number[i])
        }
    }
    return res;
}
