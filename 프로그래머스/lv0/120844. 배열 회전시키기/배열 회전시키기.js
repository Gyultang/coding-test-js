function solution(numbers, direction) {
    var answer = [];
    let rightNum = numbers[numbers.length-1]
    let leftNum = numbers[0]
    if(direction==="right"){
        numbers.pop()
        answer=[rightNum,...numbers]
     }else{
         let arr=numbers.slice(1)
         answer=[...arr,leftNum]
    }
    return answer;
}