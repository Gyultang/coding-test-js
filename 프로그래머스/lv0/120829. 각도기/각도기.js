function solution(angle) {
    let x = angle;
    if(x<90){
        x=1
    }else if(90===x){
         x=2
    }else if(90<x&&x<180){
         x=3
    }else if(180===x){
        x=4
    }
    return x;
}