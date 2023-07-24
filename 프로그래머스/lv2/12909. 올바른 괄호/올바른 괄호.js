function solution(s){
    var answer = true;
    let countNum = 0;
    for(let i=0;i<s.length;i++){
        countNum+=s[i]==='('?1:-1;
        if(countNum<0) return  false;
    }

    return countNum===0?true:false;
}