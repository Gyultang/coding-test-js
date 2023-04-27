function solution(n) {
    let arr=[]
    for(let i=1;i<=n;i++){
        if(n%i===0){
            arr.push(i)
        }
    }
    return arr.reduce((a,c)=>a+c,0);
}