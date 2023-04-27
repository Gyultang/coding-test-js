function solution(n) {
    let numArr=String(n).split("");
    let reArr=numArr.reverse()
    return reArr.map(e=>Number(e));
}