function solution(my_string) {
    let strArr=my_string.split("")
    let set = new Set(strArr)
    return [...set].join('');
}