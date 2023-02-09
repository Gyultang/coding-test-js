function solution(n) {
    let arr=new Set();
    for(let i=1;i<=n;i++){
        for(let y=2;y<i;y++){
            if(i%y===0){
                arr.add(i)
            }
        }
    }
    return arr.size;
}
 