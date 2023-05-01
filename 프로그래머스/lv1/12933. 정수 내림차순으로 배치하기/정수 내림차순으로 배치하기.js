function solution(n) {
    return String(n).split("").map(e=>e*1).sort((a,b)=>b-a).join('')*1;
}