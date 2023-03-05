function solution(my_string) {
    let res = 0;
    let num = my_string.replace(/[^0-9]/g,"+");
    let numArr=num.split("+")
    for(e of numArr){
        if(e !== ""){
            res+=parseInt(e)
        }
    }
    return  res;
}