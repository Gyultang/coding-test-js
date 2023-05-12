function solution(n) {
    let sqrtNum=Math.sqrt(n)
    return Number.isInteger(sqrtNum)?(Math.sqrt(n)+1)*(Math.sqrt(n)+1):-1;
}