function solution(sides) {
    let maxNum=Math.max(...sides);
    let maxIndex=sides.indexOf(Math.max(...sides));
    sides.splice(maxIndex,1)
    
    return sides.reduce((a,b)=>a+b)<=maxNum?2:1;
    // return maxNum
}