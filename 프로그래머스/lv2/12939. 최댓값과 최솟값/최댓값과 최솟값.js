function solution(s) {
    var numArr = s.split(" ").map(e=>Number(e));
    let maxNum = Math.max(...numArr)
    let minNum = Math.min(...numArr)
    let res=[minNum,maxNum]
    return res.join(" ");
}