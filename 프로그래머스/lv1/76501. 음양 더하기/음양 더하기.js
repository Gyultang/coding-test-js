function solution(absolutes, signs) {
    for(let i=0;i<absolutes.length;i++){
        if(signs[i]==true){
            absolutes[i]=absolutes[i]*1
        }else{
            absolutes[i]=absolutes[i]*-1
        }
    }
    return absolutes.reduce((acc,cur)=>acc+cur,0);
}