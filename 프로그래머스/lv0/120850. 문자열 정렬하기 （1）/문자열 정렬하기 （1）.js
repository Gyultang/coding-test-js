function solution(my_string) {
    var answer = [];
    answer=my_string.replace(/[^0-9]/g,"").split("")
    return answer.map(v=>Number(v)).sort((a,b)=>a-b);
}