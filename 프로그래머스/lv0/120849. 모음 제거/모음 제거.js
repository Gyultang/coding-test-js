function solution(my_string) {
    var answer = [];
    let moumm = ['a','e','i','o','u'];
    let arr = my_string.split("");
    for(let x of arr){
        if(moumm.includes(x)===false){
            answer.push(x)
        }
    }
    return answer.join('');
}