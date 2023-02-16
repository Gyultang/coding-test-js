function solution(num_list) {
    let even =[];
    let odd = [];
    let res = [];
    for(let x of num_list){
        if(x%2===0){
            even.push(x)
        }else{
            odd.push(x)
        }
    }
    res[0]=even.length;
    res[1]=odd.length
    return res;
}