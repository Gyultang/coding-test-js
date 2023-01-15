function solution(numbers) {
    var arrNum = numbers.sort((a,b)=>b-a);  
    return arrNum[1]*arrNum[0];
}