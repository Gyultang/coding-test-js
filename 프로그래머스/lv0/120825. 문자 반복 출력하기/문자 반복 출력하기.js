function solution(my_string, n) {
    var answer = '';
    let arr=my_string.split("")
    for(let x of arr){
       answer+= x.repeat(n)
    }
    return answer
}