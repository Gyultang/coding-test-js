function solution(strlist) {
    let str = [];
    for(let x of strlist){   
       str.push(x.split("").length)
    }
    return str;
}