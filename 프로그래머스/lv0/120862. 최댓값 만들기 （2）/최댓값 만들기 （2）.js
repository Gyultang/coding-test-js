function solution(numbers) {
    let res = numbers.sort((a,b)=>a-b);
    let mySet = new Set(res);
    let arrSet = [...mySet];
    let maxNum = [arrSet[0]*arrSet[1],arrSet[arrSet.length-1]*arrSet[arrSet.length-2]]
    return res.length>3?Math.max(...maxNum):res[0]*res[1];
}