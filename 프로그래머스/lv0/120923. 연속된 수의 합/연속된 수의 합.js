function solution(num, total) {
    let answer = Array.from({length: num}, (v,i)=>i);
    let sum =  answer.reduce((a,b)=>a+b)
    
    return answer.map(n=>n-(sum-total)/num);
    
}