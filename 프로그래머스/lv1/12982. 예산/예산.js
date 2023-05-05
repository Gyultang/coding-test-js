function solution(d, budget) {
    let money=budget
    let res=0;
    d.sort((a, b) => a - b)
    for(let i=0;d[i]<=money;i++){
        money-=d[i]
        if(money<0){
            money=d.length
        }
        res++
    }
    return res;
}